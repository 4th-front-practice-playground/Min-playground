const isLoggedIn = false;

function goToMyPage() {
    window.location.href = isLoggedIn ? "/accounts/mypage/" : "/accounts/login/";
}
