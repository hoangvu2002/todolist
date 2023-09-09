export default function modal() {
    const addTask = document.querySelector('.add');
    const modal = document.querySelector("[data-modal]");
    addTask.onclick = () => {modal.showModal()};

    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          modal.close()
        }
      });
}