export const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "password is required";
  } else if (value.length < 6) {
    error = "password have to than 6 character";
  } else if (value.length > 24) {
    error = "password have to smaller 24 character";
  }
  return error;
};

export const validateUsername = (value) => {
  let error;
  if (!value) {
    error = "username is required";
  } else if (value.length < 6) {
    error = "username have to than 6 character";
  } else if (value.length > 24) {
    error = "username have to smaller 24 character";
  }
  return error;
};
