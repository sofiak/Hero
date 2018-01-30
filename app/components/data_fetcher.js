const url = 'http://api.tvmaze.com/schedule';

export default class DataFetcher {

  get() {
   return fetch(url)
        .then(response => response.json())
        .then((data) => this.clean(data));
  }

  clean(data) {
    let clean_data = [];
    data.map(item => {
      let listing = {};
      listing.id = item.id;
      listing.episode = item.name;
      listing.description = item.show.summary.replace(/<[^>]+>/g, '');
      listing.show = item.show.name;
      listing.airtime = item.airtime;
      listing.type = item.show.type;
      listing.image = item.show.image ? item.show.image.medium :
      "http://www.paanpaan.com/wp-content/uploads/2017/02/no-image.png";
      listing.season = item.season;
      listing.episode_number = item.number;
      listing.network = item.show.network ? item.show.network.name : "Unknown";
      clean_data.push(listing);
    })
    return clean_data;
  }
}
