const Base_Url = " http://localhost:3001";
export const fetcher = async (url) => {
    let responesOBject = {errorMessage: '', data: []};
  try { 
    const response = await fetch(Base_Url + url);
    if(!response.ok) {
      throw new Error (`HTTP Error ${response.status}`);
      }
    const responseData = await response.json();
    responesOBject.errorMessage = '';
    responesOBject.data = responseData;
} 
catch (err) {
    responesOBject.errorMessage = err.message;
    }
    return responesOBject;
}

export const getCategorie = () => {
  return fetcher("/categories");
}
export const getProduct = (id) => {
  return fetcher("/products?catId=" +id);
}
export const getProductById = (id) => {
  return fetcher("/products/" + id);
}