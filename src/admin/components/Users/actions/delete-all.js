export default () => {
  if (!window.confirm('This will delete all data, Are you sure?')) {
    return;
  }

  const token = localStorage.getItem('admin-token');
  const headers = new Headers({
    Accept: 'application/csv',
    'x-access-token': token
  });

  fetch('/api/exports', { method: 'DELETE', headers: headers })
    .then(response => {
      if (!response.ok) alert('Something went wrong');
    });
}
