function main() {

    /*function backup_gavnakod{ const menuButton = document.querySelectorAll('.menu-button');
        const mediaWrapper = document.querySelectorAll('#media-wrapper');
        const descriptionWrapper = document.querySelectorAll('#description-wrapper');
        const mediaMain = document.getElementById('media-main');
        const mediaWorkout = document.getElementById('media-workout');
        const mediaForparents = document.getElementById('media-for-parents');
        const mediaForpupils = document.getElementById('media-for-pupils');

        const descriptionMain = document.getElementById('description-main');
        const descriptionWorkout = document.getElementById('description-workout');
        const descriptionForparents = document.getElementById('description-for-parents');
        const descriptionForpupils = document.getElementById('description-for-pupils');
        const promoVideo = document.getElementById('promo-video');

        mediaWorkout.classList.add('hidden');
        mediaForparents.classList.add('hidden');
        mediaForpupils.classList.add('hidden');

        descriptionWorkout.classList.add('hidden');
        descriptionForparents.classList.add('hidden');
        descriptionForpupils.classList.add('hidden');


        function mainClicked() {
            mediaMain.classList.remove('hidden');
            mediaWorkout.classList.add('hidden');
            mediaForparents.classList.add('hidden');
            mediaForpupils.classList.add('hidden');

            descriptionMain.classList.remove('hidden');
            descriptionWorkout.classList.add('hidden');
            descriptionForparents.classList.add('hidden');
            descriptionForpupils.classList.add('hidden');
        }

        function workoutClicked() {
            mediaMain.classList.add('hidden');
            mediaWorkout.classList.remove('hidden');
            mediaForparents.classList.add('hidden');
            mediaForpupils.classList.add('hidden');

            descriptionMain.classList.add('hidden');

            descriptionWorkout.classList.remove('hidden');
            descriptionForparents.classList.add('hidden');
            descriptionForpupils.classList.add('hidden');
        }

        function forparentsClicked() {
            mediaMain.classList.add('hidden');
            mediaWorkout.classList.add('hidden');
            mediaForparents.classList.remove('hidden');
            mediaForpupils.classList.add('hidden');

            descriptionMain.classList.add('hidden');
            descriptionWorkout.classList.add('hidden');
            descriptionForparents.classList.remove('hidden');
            descriptionForpupils.classList.add('hidden');
        }

        function forpupilsClicked() {
            mediaMain.classList.add('hidden');
            mediaWorkout.classList.add('hidden');
            mediaForparents.classList.add('hidden');
            mediaForpupils.classList.remove('hidden');

            descriptionMain.classList.add('hidden');
            descriptionWorkout.classList.add('hidden');
            descriptionForparents.classList.add('hidden');
            descriptionForpupils.classList.remove('hidden');
        }
    }*/

class menuButton {

    constructor(name) {

        this.buttonName = name;
        this.buttonLink = document.getElementById(this.buttonName);
        this.mediaViewLink = document.querySelector('#media-' + this.buttonName);
        this.descriptionViewLink = document.querySelector('#description-' + this.buttonName);
        }

      hideContent() {
          this.mediaViewLink.classList.add('hidden');
          this.descriptionViewLink.classList.add('hidden');
    }

       showContent() {
           this.mediaViewLink.classList.remove('hidden');
           this.descriptionViewLink.classList.remove('hidden');
    }
}
    const menuButtonsManager = {
        menuButtons: [],
        hideAnotherButtons: function (buttonId) {
            this.menuButtons.forEach((button) => {
                button.buttonName !== buttonId ? button.hideContent() : button.showContent();
            });
        }};

const main = new menuButton('main');
const workout = new menuButton('workout');
const forParents = new menuButton('for-parents');
const forPupils = new menuButton('for-pupils');
menuButtonsManager.menuButtons.push(main, workout, forParents, forPupils);



   function toggle(e) {
       menuButtonsManager.hideAnotherButtons(e.target.id);
           /*switch (e.target.id) {
           case 'main': ) break;
           case 'workout': tabList.hideAnotherTabs('workout'); break;
           case 'for-parents': tabList.hideAnotherTabs('for-parents'); break;
           case 'for-pupils': tabList.hideAnotherTabs('for-pupils'); break;
           default: break;
       }*/
   }

// Проходим по массиву
    menuButtonsManager.menuButtons.forEach(function (button) {
        button.buttonLink.addEventListener('click', function (e) {
            toggle(e);
        });
    });

}

