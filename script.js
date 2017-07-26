var lockButton = document.querySelector('.lockButton');
var unlockButton = document.querySelector('.unlockButton');

var myHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

var url = 'http://192.168.2.60:8080/send-command';

async function lockClick() {
  let res = await window.fetch(url, {
    method: 'PUT',
    // mode: 'no-cors',
    headers: myHeaders,
    body: JSON.stringify({
      'command': 'lock-control',
      'rf-type': 'Zigbee',
      'arguments': {
        '--port': '/dev/ttyUSB0',
        '--rf-type': 'Zigbee',
        '--device': 'A46E',
        '--new-state': 'Unlock',
        '--endpoint': '01'
        }
      })
    })
  console.log('lock results: ', res);
}

async function unlockClick() {
  let res = await window.fetch(url, {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify({
      'command': 'lock-control',
      'rf-type': 'Zigbee',
      'arguments': {
        '--port': '/dev/ttyUSB0',
        '--rf-type': 'Zigbee',
        '--device': 'A46E',
        '--new-state': 'Lock',
        '--endpoint': '01'
        }
      })
    })
  console.log('unlock results: ', res);
}


// var myInitUnlock = {
//   method: 'PUT',
//   headers: myHeaders,
//   body: JSON.stringify({
//     'command': 'lock-control',
//     'rf-type': 'Zigbee',
//     'arguments': {
//       '--port': '/dev/ttyUSB0',
//       '--rf-type': 'Zigbee',
//       '--device': 'A46E',
//       '--new-state': 'Unlock',
//       '--endpoint': '01'
//     }
//   })
// }
//
// var myInitLock = {
//   method: 'PUT',
//   body: {
//     'command': 'lock-control',
//     'rf-type': 'Zigbee',
//     'arguments': {
//       '--port': '/dev/ttyUSB0',
//       '--rf-type': 'Zigbee',
//       '--device': 'A46E',
//       '--new-state': 'Lock',
//       '--endpoint': '01'
//     }
//   }
// }

// var myRequestLock = new Request(url, myInitLock);

// function lockClick() {
//   fetch(myRequestLock).then(function(res) {
//     console.log('lock res: ', res);
//   });
// }

// function unlockClick() {
//   console.log('unlockClick');
// }

lockButton.onclick = lockClick;
unlockButton.onclick = unlockClick;
