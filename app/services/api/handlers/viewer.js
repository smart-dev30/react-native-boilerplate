export default apiCall => ({
  loadViewer: () => apiCall({ endpoint: '/user' }),
})
