export const validateForm = (values) => {
    const errors = {};
  
    if (!values.productsToFind) {
      errors.productsToFind = "Required";
    } else if (isNaN(values.productsToFind) || values.productsToFind < 0) {
      errors.productsToFind = "Must be a number greater than or equal to 0";
    }
  
    if (!values.influencerName.trim()) {
      errors.influencerName = "Required";
    }
    if(!values.influencerName.match(/^[a-zA-Z\s]$/)) {
      errors.influencerName = "Must contain only letters and spaces";
    }
  
    if (!values.claimsToAnalize) {
      errors.claimsToAnalize = "Required";
    } else if (isNaN(values.claimsToAnalize) || values.claimsToAnalize < 50 || values.claimsToAnalize > 100) {
      errors.claimsToAnalize = "Must be a number between 50 and 100";
    }
  
    if (values.scientisJournals.length === 0) {
      errors.scientisJournals = "Select at least one journal";
    }
    return errors;
  };