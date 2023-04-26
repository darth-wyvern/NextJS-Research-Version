export const FetchData = (url) => {
  return fetch(url)
    .then(res => {
      return res.json();
    })
}