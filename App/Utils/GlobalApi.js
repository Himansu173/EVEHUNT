import { request, gql } from 'graphql-request';

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/cls6yxo480sam01w3yltezmxf/master";

const getSlider = async () => {
  const query = gql`
    query MyQuery {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error; // Rethrow the error or handle it as needed
  }
};

const getCategories=async()=>{
    const query = gql`
    query GetCategory {
  categories {
    id
    name
    icon {
      url
    }
  }
}
`
try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error; // Rethrow the error or handle it as needed
  }
}

const BusinessName=async()=>{
  const query = gql`
 query GetBusinessList {
  businessLists {
    id
    about
    address
    category {
      ... on Category {
        name
      }
    }
    name
    email
    banner {
      url
    }
    images {
      url
    }
    contact
    owner
    mapLocation {
      latitude
      longitude
    }
  }
}

`
try {
  const result = await request(MASTER_URL, query);
  return result;
} catch (error) {
  console.error("Error fetching sliders:", error);
  throw error; // Rethrow the error or handle it as needed
}
}


const getBusinessListByCategory=async(category)=>{
  const query = gql`
query GetBusinessList {
  
  businessLists(where: {category_some: {Category: {name: "`+category+`"}}})
  {
    id
    about
    address
    name
    images {
      url
    }
    banner {
      url
    }
    contact
    email
    category {
      ... on Category {
        id
        name
      }
    }
    followers
    owner
    mapLocation {
      latitude
      longitude
    }
  }
}
`
try {
  const result = await request(MASTER_URL, query);
  return result;
} catch (error) {
  console.error("Error fetching sliders:", error);
  throw error; // Rethrow the error or handle it as needed
}
}

const  createBooking=async(data)=>{
  const mutationQuery=gql`
  mutation createBooking {
  createBooking(
    data: {
       date: "`+data.date+`",
       time: "`+data.time+`", 
       note: "`+data.note+`",
       userName: "`+data.userName+`", 
       userEmail: "`+data.userEmail+`",
     bookingStatus: InProgress, 
     businessList: {connect: {id: "`+data.businessId+`"}}}
  ) {
    id
  }
  publishManyBookings(to: PUBLISHED) {
    count
  }
  publishManyBusinessLists {
    count
  }
}

  `
  try {
    const result = await request(MASTER_URL, mutationQuery);
    return result;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error; // Rethrow the error or handle it as needed
  }
}


const getUserBooking=async(usermail)=>{
  const mutationQuery=gql`
  query GetUserBooking {
  bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+usermail+`"}) {
    bookingStatus
    date
    time
    businessList {
      followers
      id
      banner {
        url
      }
      address
      contact
      name
      owner
      email
      about
      mapLocation {
      latitude
      longitude
    }
    }
    id
    userName
    userEmail
   
  }
}

  `
  try {
    const result = await request(MASTER_URL, mutationQuery);
    return result;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error; // Rethrow the error or handle it as needed
  }
}





export default {getSlider,
  getCategories,
  BusinessName,
  getBusinessListByCategory,
  createBooking,
  getUserBooking
}
