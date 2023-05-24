const yelpAPI = import.meta.env.VITE_YELP_API_KEY;

export const Yelp = {
  search(term, location, sortBy) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${yelpAPI}`,
      },
    };

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}%20food&sort_by=${sortBy}&limit=21`, options)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses.length !== 0) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        } else {
          return false;
        }
      })
      .catch((err) => console.error(err));
  },
};
