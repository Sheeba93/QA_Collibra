function generateName(){
    const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // months are 0-based
  const year = now.getFullYear();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `testasset_${day}${month}${year}${minutes}${seconds}`;

}

module.exports = {generateName}