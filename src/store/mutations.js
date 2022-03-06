export  const changeLanguage =(state, selectedLanguage) => {
    if (selectedLanguage === "Tr") {
        state.language.Tr = true;
        state.language.En = false;
    } else {
        state.language.Tr = false;
        state.language.En = true;
    }
}
export const mobileMode = (state, control) => {
    state.mobileMode = control //true or false;
}
