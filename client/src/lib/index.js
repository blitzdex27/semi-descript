/**
 *
 * @param {input name} name
 * @param {filename with extention} file
 * @returns a promise ({message: string, error: bool})
 */
export const submitMultipartForm = async (name, file) => {
  const formdata = new FormData();
  formdata.append(name, file);

  const response = await fetch("/upload", {
    method: "POST",
    body: formdata,
  });

  const json = await response.json();
  return json;
};
