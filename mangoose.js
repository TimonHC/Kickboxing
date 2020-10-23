function main() {

    const menuButton = document.querySelectorAll('.menu-button');
    const mediaWrapper = document.querySelectorAll('#media-wrapper');
    const descriptionWrapper = document.querySelectorAll('#description-wrapper');
    const mediaMain = document.getElementById('media-main');

    function mainClicked() {
        mediaMain.classList.add('hidden');
    }

    function workoutClicked() {
        console.log('workout clicked');
    }

    function forparentsClicked() {
        console.log('forparents clicked');
    }

    function forpupilsClicked() {
        console.log('forpupils clicked');
    }

   function toggle(e) {
           switch (e.target.id) {
           case 'main-button': mainClicked(); break;
           case 'workout': workoutClicked(); break;
           case 'for-parents': forparentsClicked(); break;
           case 'for-pupils': forpupilsClicked(); break;
           default: break;
       }
   }

// Проходим по массиву
    menuButton.forEach(function (button) {
        button.addEventListener('click', function (e) {
            toggle(e);
        });
    });
}
