const
  // module scope constants
  MOD_CALL_REQUEST_ID = 'mod-call-request',
  MOD_INSTANT_MESSAGES_ID = 'mod-instant-messages',
  MOD_MANAGER_MESSAGES_ID = 'mod-manager-messages',
  MOD_CHAT_CUSTOMER_MANAGER_ID = 'mod-customer-manager-chat',

  // module config
  config = {
    modules: [
      {
        id: MOD_CALL_REQUEST_ID,
        do_enable: true
      },
      {
        id: MOD_INSTANT_MESSAGES_ID,
        do_enable: true
      },
      {
        id: MOD_MANAGER_MESSAGES_ID,
        do_enable: true
      },
      {
        id: MOD_CHAT_CUSTOMER_MANAGER_ID,
        do_enable: true
      }
    ]
  };

const initModules = () => {

  config.modules.forEach( (mod) => {
    let module = null;

    switch (mod.id) {
      case MOD_CALL_REQUEST_ID:
        if (mod.do_enable) {
          module = require( './modules/call_request/module.js' );
        }
        break;
      case MOD_INSTANT_MESSAGES_ID:
        if (mod.do_enable) {
          module = require( './modules/instant_messages/module.js' );
        }
        break;
      case MOD_MANAGER_MESSAGES_ID:
        if (mod.do_enable) {
          module = require( './modules/manager_messages/module.js' );
        }
        break;
      case MOD_CHAT_CUSTOMER_MANAGER_ID:
        if (mod.do_enable) {
          module = require( './modules/chat_customer_manager/module.js' );
        }
        break;
    }

    if ( module ) module.api.init();

  });
};

const init = () => {
  initModules();
};

if ( !(window.jQuery !== undefined) ) {
  let script = document.createElement('script');
  script.src = 'js/jquery-3.1.1.min.js';
  document.getElementsByTagName('body')[0].appendChild(script);
}
else {
  $( document ).ready( () => { init(); } );
}
