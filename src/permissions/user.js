import firebase from '../firebase';

const USER_PERMISSION_LEVELS = [
  'staff',
  'sysadmin',
  'admin',
  'yearco',
  'studsvcs',
  'student',
  'disabled'
];

/**
 * Gets a list of the users authentication claims
 * 
 * @returns {Array} List of permissions
 */
export async function getUserPermissions() {
  const { currentUser } = firebase.auth();
  const { claims } = await currentUser.getIdTokenResult();

  const userClaims = [];

  USER_PERMISSION_LEVELS.forEach(permissionLevel => {
    if (!claims[permissionLevel]) return;

    userClaims.push(permissionLevel);
  });

  return userClaims;
}


/**
 * Determine if the user is disabled or not
 * 
 * @returns {Boolean} User is disabled
 */
export  async function isDisabled() {
  const auth = await getUserPermissions();

  return auth.includes('disabled');
}


/**
* Determine if the user is a student or not
* 
* @returns {Boolean} User is a student
*/
export async function isStudent() {
  const auth = await getUserPermissions();

  return auth.includes('student');
}


/**
* Determine if the user is staff or not
* 
* @returns {Boolean} User is staff
*/
export async function isStaff() {
  const auth = await getUserPermissions();
  
  return auth.includes('staff');
}


/**
* Determine if the user is student services or not
* 
* @returns {Boolean} User is student services
*/
export async function isStudentServices() {
  const auth = await getUserPermissions();
  
  return auth.includes('studsvcs');
}


/**
* Determine if the user is a year coordinator or not
* 
* @returns {Boolean} User is a year coordinator
*/
export async function isYearLeader() {
  const auth = await getUserPermissions();
  
  return auth.includes('yearco');
}


/**
* Determine if the user is an administrator or not
* 
* @returns {Boolean} User is an administrator
*/
export async function isAdministrator() {
  const auth = await getUserPermissions();
  
  return auth.includes('admin');
}


/**
* Determine if the user is a system administrator or not
* 
* @returns {Boolean} User is a system administrator
*/
export async function isSystemAdministrator() {
  const auth = await getUserPermissions();
  
  return auth.includes('sysadmin');
}