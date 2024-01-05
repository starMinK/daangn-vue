export default {
    menuSelected(path) {
        console.log(path);
        switch (path) {
            case "/":
                return 0;
            case "/hot-articles":
                return 1;
            case "/nearby-stores":
                return 2;
            case "/jobs":
                return 3;
            case "/realty":
                return 4;
            case "/car":
                return 5;
            default:
                return 0;
        }
    },
    onDevelopingAlert() {
        alert("개발 중 입니다.");
        /*여기에 이동 막기 코드 추가*/
    }
}