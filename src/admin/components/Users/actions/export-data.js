export default () => {
  const token = localStorage.getItem('admin-token');
  const headers = new Headers({
    Accept: 'application/csv',
    'x-access-token': token
  });

  fetch('/api/exports', { method: 'GET', headers: headers })
    .then(response => response.text())
    .then(text => {
      const data = encodeURIComponent(text);
      const element = document.createElement('a');
      element.setAttribute(
        'href',
        `data:application/csv;charset=utf-8,${ data }`
      );
      element.setAttribute('download', 'export.csv');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    });
}
