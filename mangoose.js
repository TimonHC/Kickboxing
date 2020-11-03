function main() {

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
const contacts = new menuButton('contacts');

menuButtonsManager.menuButtons.push(main, workout, contacts);



   function toggle(e) {
       menuButtonsManager.hideAnotherButtons(e.target.id);
   }

// Проходим по массиву
    menuButtonsManager.menuButtons.forEach(function (button) {
        button.buttonLink.addEventListener('click', function (e) {
            toggle(e);
        });
    });

}

