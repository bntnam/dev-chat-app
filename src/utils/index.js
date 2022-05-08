export const formatChannelName = channelName => {
  return channelName
    .toString()
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "");
};
