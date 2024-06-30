export const Notifications = (()=> {
    // private members
    let notifs = [];
    // public members, exposed with return statement
    return {
        addNotification,
        PrintNotifications
    };

    // Public Method
    function addNotification(notif) {
        notifs = [...notifs, notif]

    }

    // Private Method - Prefixed with single underscore
    function PrintNotifications(object) {
        console.log(notifs)
    }
})();