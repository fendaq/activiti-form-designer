let formExtendID = 0;

export function clearFormID() {
  formExtendID = 0;
}

export default function createFormID() {
  formExtendID += 1;
  return formExtendID;
}
