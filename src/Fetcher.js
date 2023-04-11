const Base_Url = " http://localhost:3001";
export const fetcher = async (url) => {
    let responesOBject = {errorMessage: '', data: []};
  try { 
    const response = await fetch(Base_Url + url);
    const responseData = await response.json();
    responesOBject.errorMessage = '';
    responesOBject.data = responseData;
} 
catch (err) {
    responesOBject.errorMessage = err.message;
    }
    return responesOBject;
};