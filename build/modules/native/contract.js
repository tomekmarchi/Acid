/**
 * Create a lazy contract using an array of strings required to satisfy the contract. After the contract is completed an async callback is executed.
 * @param      {Array,String}   Contract array when setting & String if satisfying a portion of the contract
 * @param      {String}   Contract name must be unique from other contracts
 * @param      {Function} callback
 * @return     {Undefined} returns nothing from the function
 */
const contract = (arry, contractName, callback) => {
  if (callback) {
    contract[contractName] = (part) => {
      return has(arry, part) && shiftArray(arry) && !getLength(arry) && asyncMethod(callback);
    };
  } else {
    contract[contractName](arry);
  }
};
$.contract = contract;
