/*  Было внесено пару изменений - shark4jk
 work only on redAge v3
*/

mp.events.add("openAdminPanel", () => {
  if (!loggedin || chatActive || global.isAdmin !== true) return;
  global.AdminMenu = mp.browsers.new('package://cef/AdminMenu/index.html');
  global.AdminMenu.active = true;
  global.AdminMenu.enable = true;
  global.menuOpen();
  global.AdminMenu.openMenu();
});

global.adminConfig = {
  mode: false,
  menuOpen: false,
}

mp.keys.bind(0x77, false, () => {
  if (!loggedin || chatActive || global.isAdmin !== true) return;
  if(!global.adminConfig)
  {
    global.AdminMenu = mp.browsers.new('package://cef/AdminMenu/index.html');
    global.AdminMenu.active = true;
    global.AdminMenu.enable = true;
    global.adminConfig.mode = true;
    global.adminConfig.menuOpen = true;
    global.adminConfig = true;
    global.menuOpen();
    global.AdminMenu.openMenu();
  }
  if(global.adminConfig)
  {
    global.adminConfig.mode = false;
    global.adminConfig.menuOpen = false;
    global.adminConfig = false;
    global.AdminMenu.destroy();
    global.menuClose();
    global.AdminMenu.close();
    return;
  }
});

mp.events.add("closeAdminPanel", () => {
  if(global.AdminMenu)
  {
    global.AdminMenu.destroy();
    global.menuClose();
    global.AdminMenu.close();
    global.adminConfig.mode = false;
    global.adminConfig.menuOpen = false;
    global.adminConfig = false;
    return;
  }
});