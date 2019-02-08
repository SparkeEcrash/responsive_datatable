function validateFirstName(first_name) {
  const first_name_errors = [];
  if(first_name === '') {
    first_name_errors.push('Please enter the First Name');
  }

  const reformatted_first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();

  return ({
    reformed_input: reformatted_first_name,
    errors: first_name_errors
  });
}

function validateLastName(last_name) {
  const last_name_errors = [];
  if(last_name === '') {
    last_name_errors.push('Please enter the Last Name');
  }

  const reformatted_last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1).toLowerCase();

  return ({
    reformed_input: reformatted_last_name,
    errors: last_name_errors
  });
}

function validateTelephoneNumber(telephone_number) {
  const telephone_number_errors = [];
  if(telephone_number === '') {
    telephone_number_errors.push('Please enter the Telephone Number');
  }

  let reformatted_telephone_number = telephone_number;

  const regexp = /\d/;
  telephone_number = telephone_number.split('');
  let temp_telephone_number = '';
  telephone_number.forEach(function(character) {
    if(regexp.test(character)) {
      temp_telephone_number += character;
    }
  });

  if(temp_telephone_number.length !== 10) {
    telephone_number_errors.push('Please enter only 10 digits for the Telephone Number');
  } else {
    reformatted_telephone_number = `${temp_telephone_number.substring(0,3)}-${temp_telephone_number.substring(3,6)}-${temp_telephone_number.substring(6,10)}`;
  }

  return ({
    reformed_input: reformatted_telephone_number,
    errors: telephone_number_errors
  });
}

function validateStreet(street) {
  const street_errors = [];

  if(street === '') {
    street_errors.push('Please enter the Street');
  }

  const reformatted_street = street;

  return ({
    reformed_input: reformatted_street,
    errors: street_errors
  });
}

function validateCity(city) {
  const city_errors = [];

  if(city === '') {
    city_errors.push('Please enter the City');
  }

  const reformatted_city = city;

  return ({
    reformed_input: reformatted_city,
    errors: city_errors
  });
}

function validateState(state) {
  const state_errors = [];
  let reformatted_state = '';

  if(state === '') {
    state_errors.push('Please enter the State');
  }

  const temp_state = state.toUpperCase();

  switch(temp_state) {
    case 'ALABAMA':
    case 'AL': 
      reformatted_state = 'AL'
      break;
    case 'ALASKA':
    case 'AK':
      reformatted_state = 'AK'
      break;
    case 'ARIZONA':
    case 'AZ':
      reformatted_state = 'AZ'
      break;
    case 'ARKANSAS':
    case 'AR':
      reformatted_state = 'AR'
      break;
    case 'CALIFORNIA':
    case 'CA':
      reformatted_state = 'CA'
      break;
    case 'COLORADO':
    case 'CO':
      reformatted_state = 'CO'
      break;
    case 'CONNECTICUT':
    case 'CT':
      reformatted_state = 'CT'
      break;
    case 'DELAWARE':
    case 'DC':
      reformatted_state = 'DC'
      break;
    case 'DE':
      reformatted_state = 'DE'
      break;
    case 'FLORIDA':
    case 'FL':
      reformatted_state = 'FL'
      break;
    case 'GEORGIA':
    case 'GA':
      reformatted_state = 'GA'
      break;
    case 'HAWAII':
    case 'HI':
      reformatted_state = 'HI'
      break;
    case 'IDAHO':
    case 'ID':
      reformatted_state = 'ID'
      break;
    case 'ILLINOIS':
    case 'IL':
      reformatted_state = 'IL'
      break;
    case 'INDIANA':
    case 'IN':
      reformatted_state = 'IN'
      break;
    case 'IOWA':
    case 'IA':
      reformatted_state = 'IA'
      break;
    case 'KANSAS':
    case 'KS':
      reformatted_state = 'KS'
      break;
    case 'KENTUCKY':
    case 'KY':
      reformatted_state = 'KY'
      break;          
    case 'LOUSIANA': 
    case 'LA':
      reformatted_state = 'LA'
      break;
    case 'MAINE':
    case 'ME':
      reformatted_state = 'ME'
      break;
    case 'MARYLAND':
    case 'MD':
      reformatted_state = 'MD'
      break;
    case 'MASSACHUSETTS':
    case 'MA':
      reformatted_state = 'MA'
      break;
    case 'MICHIGAN':
    case 'MI':
      reformatted_state = 'MI'
      break;
    case 'MINNESOTA':
    case 'MN':
      reformatted_state = 'MN'
      break;
    case 'MISSISSIPPI':
    case 'MS':
      reformatted_state = 'MS'
      break;
    case 'MISSOURI':
    case 'MO':
      reformatted_state = 'MO'
      break;
    case 'MONTANA':
    case 'MT':
      reformatted_state = 'MT'
      break;
    case 'NEBRASKA':
    case 'NE':
      reformatted_state = 'NE'
      break;
    case 'NEVADA':
    case 'NV':
      reformatted_state = 'NV'
      break;
    case 'NEW HAMPSHIRE':
    case 'NH':
      reformatted_state = 'NH'
      break;
    case 'NEW JERSEY':
    case 'NJ':
      reformatted_state = 'NJ'
      break;
    case 'NEW MEXICO':
    case 'NM':
      reformatted_state = 'NH'
      break;
    case 'NEW YORK':
    case 'NY':
      reformatted_state = 'NY'
      break;
    case 'NORTH CAROLINA':
    case 'NC':
      reformatted_state = 'NC'
      break;
    case 'NORTH DAKOTA':
    case 'ND':
      reformatted_state = 'ND'
      break;
    case 'OHIO':
    case 'OH':
      reformatted_state = 'OH'
      break;
    case 'OKLAHOMA':
    case 'OK':
      reformatted_state = 'OK'
      break;
    case 'OREGON':
    case 'OR':
      reformatted_state = 'OR'
      break;
    case 'PENNSYLVANIA':
    case 'PA':
      reformatted_state = 'PA'
      break;
    case 'RHODE ISLAND':
    case 'RI':
      reformatted_state = 'RI'
      break;
    case 'SOUTH CAROLINA':
    case 'SC':
      reformatted_state = 'SC'
      break;
    case 'SOUTH DAKOTA':
    case 'SD':
      reformatted_state = 'SD'
      break;
    case 'TENNESSEE':
    case 'TN':
      reformatted_state = 'TN'
      break;
    case 'TEXAS':
    case 'TX':
      reformatted_state = 'TX'
      break;
    case 'UTAH':
    case 'UT':
      reformatted_state = 'UT'
      break;
    case 'VERMONT':
    case 'VT':
      reformatted_state = 'VT'
      break;
    case 'VIRGINIA':
    case 'VA':
      reformatted_state = 'VA'
      break;
    case 'WASHINGTON':
    case 'WA':
      reformatted_state = 'WA'
      break;
    case 'WEST VIRGINIA':
    case 'WV':
      reformatted_state = 'WV'
      break;
    case 'WISCONSIN':
    case 'WI':
      reformatted_state = 'WI'
      break;
    case 'WYOMING':
    case 'WY':
      reformatted_state = 'WY'
      break;
    default:
      reformatted_state = state
  }

  if(reformatted_state.length !== 2) {
    state_errors.push('Please enter a valid state from the United States of America');
  }

  return ({
    reformed_input: reformatted_state,
    errors: state_errors
  });
}

function validateZipCode(zip_code) {
  const zip_code_errors = [];
  let reformatted_zip_code = zip_code;
  if(zip_code === '') {
    zip_code_errors.push('Please enter the Zip Code');
  }

  const regexp = /\d/;
  zip_code = zip_code.split('');
  let temp_zip_code = '';
  zip_code.forEach(function(character) {
    if(regexp.test(character)) {
      temp_zip_code += character;
    }
  });


  if(temp_zip_code.length !== 5) {
    zip_code_errors.push('Please enter only 5 digits for the Zip Code');
  } else {
    reformatted_zip_code = temp_zip_code;
  }

  return ({
    reformed_input: reformatted_zip_code,
    errors: zip_code_errors
  });
}

function validateEmailAddress(email_address) {
  const email_address_errors = [];
  if(email_address === '') {
    email_address_errors.push('Please enter the Email Address');
  }

  const regexp = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/;
  if(!regexp.test(email_address)) {
    email_address_errors.push('Please enter a valid Email Address');
  }

  const reformatted_email_address = email_address;

  return ({
    reformed_input: reformatted_email_address,
    errors: email_address_errors
  });
}

function validateImage(image) {
  const image_errors = [];
  const reformatted_image = image;

  return ({
    reformed_input: reformatted_image,
    errors: image_errors
  });
}