import { deezerApi } from "../../utils/config";

export default {
  /** Send a Get request to Get Artiste Details */
  async GetArtisteDetails(artisteId) {
    return deezerApi.get(`artist/${artisteId}`);
  },

  /** Send a Get request to Get Artiste Top Songs */
  async GetTopSongs(artisteId) {
    return deezerApi.get(`artist/${artisteId}/top`);
  },

  /** Send a Get request to Get Artiste Albums */
  async GetAlbums(artisteId) {
    return deezerApi.get(`artist/${artisteId}/albums`);
  },
};
