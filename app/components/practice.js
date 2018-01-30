var data = [
  {
    name: "friends",
    type: "comedy"
  },
  {
    name: "big bang theory",
    type: "shit"
  }
 ];

 var filters = {
   type: ["comedy"]
 };

 function dodo(data, filters) {
   filtered_data = data.filter(function (listing) {
     return filters.type.includes(listing.type);
   });
return filtered_data;
 }

 dodo(data, filters);
