export const toastifyFunction = (message: string) => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  window.Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, #352F44, #B9B4C7)',
    },
  }).showToast();
};
