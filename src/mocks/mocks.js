import moment from "moment";
import annAvatar from "../assets/chat-users/Ann.png";
import aspenAvatar from "../assets/chat-users/Aspen.png";
import gretchenAvatar from "../assets/chat-users/Gretchen.png";
import tomAvatar from "../assets/chat-users/Tom.png";
import searchIcon from "../assets/images/header/search.gif";
import inboxIconGray from '../assets/images/my-services/email/inbox-gray.png';
import inboxIconBlue from '../assets/images/my-services/email/inbox-blue.png';
import draftsIconGray from '../assets/images/my-services/email/drafts-gray.png';
import draftsIconBlue from '../assets/images/my-services/email/drafts-blue.png';
import sentIconGray from '../assets/images/my-services/email/sent-gray.png';
import sentIconBlue from '../assets/images/my-services/email/sent-blue.png';
import starredIconGray from '../assets/images/my-services/email/star-gray.png';
import starredIconBlue from '../assets/images/my-services/email/star-blue.png';
import emailLogo from '../assets/images/my-services/email/email-logo.png';
import emailLogo1 from '../assets/images/my-services/email/email-logo1.svg';
import emailLogo2 from '../assets/images/my-services/email/email-logo2.svg';
import emailLogo3 from '../assets/images/my-services/email/email-logo3.svg';
import emailLogo4 from '../assets/images/my-services/email/email-logo4.svg';
import emailLogo5 from '../assets/images/my-services/email/email-logo5.svg';
import clientImage from '../assets/images/invoice-manager/client-image.png';
import companyLogo from '../assets/images/invoice-manager/company-icon.png';
import avatar1 from '../assets/images/my-services/tasks/avatar1.png';
import avatar2 from '../assets/images/my-services/tasks/avatar2.png';
import avatar3 from '../assets/images/my-services/tasks/avatar3.png';
import driveFolder from '../assets/images/my-services/workdrive/data/folder.svg';
import driveVideoFolder from '../assets/images/my-services/workdrive/data/video-folder.svg';
import drivePhoto from '../assets/images/my-services/workdrive/data/photo.svg';
import driveTxt from '../assets/images/my-services/workdrive/data/txt.svg';
import driveCodeFolder from '../assets/images/my-services/workdrive/data/code-folder.svg';
import driveExcel from '../assets/images/my-services/workdrive/data/excel.svg';

import user1 from '../assets/images/my-services/workdrive/users/user1.svg';
import user2 from '../assets/images/my-services/workdrive/users/user2.svg';
import user3 from '../assets/images/my-services/workdrive/users/user3.svg';
import user4 from '../assets/images/my-services/workdrive/users/user4.svg';
import user5 from '../assets/images/my-services/workdrive/users/user5.svg';

import mockEmailPDF from '../assets/images/email/new admin tasks.pdf';
import mockEmailphoto from '../assets/images/email/test-image.png';





export const clientData = {
  user_id: 1,
};

export const accounts = [
  {
    id: 1,
    balance: "24 500",
    currency: "CHF",
    cardNumber: "56988486 02851435 86629320",
  },
  {
    id: 2,
    balance: "7 300",
    currency: "EUR",
    cardNumber: "90013942 82544594 49005189",
  },
  {
    id: 3,
    balance: "5 800",
    currency: "USD",
    cardNumber: "29120575 66891365 54023171",
  },
];

// start mock datas for tasks block tabs
export const backlogLists = [
  {
    id: 1,
    title: "Make new logo",
    description: "create at least three initial design concepts",
  },
  {
    id: 2,
    title: "Test new website",
    description: "manual testing & heuristics",
  },
  {
    id: 3,
    title: "Revise marketing plan",
    description: "define new objectives + develop action plan",
  },
];

export const inprogressLists = [
  {
    id: 4,
    title: "Change logo design",
    description: "change at least three initial design concepts",
  },
  {
    id: 5,
    title: "Change new website",
    description: "change manual testing & heuristics",
  },
  {
    id: 6,
    title: "Change marketing plan",
    description: "change new objectives + develop action plan",
  },
];

export const doneLists = [
  {
    id: 7,
    title: "Remove new logo",
    description: "remove at least three initial design concepts",
  },
  {
    id: 8,
    title: "Remove new website",
    description: "remove testing & heuristics",
  },
  {
    id: 9,
    title: "Remove marketing plan",
    description: "remove new objectives + develop action plan",
  },
];

export const closedLists = [
  {
    id: 10,
    title: "Delete new logo",
    description: "delete at least three initial design concepts",
  },
  {
    id: 11,
    title: "Delete new website",
    description: "delete testing & heuristics",
  },
  {
    id: 12,
    title: "Delete marketing plan",
    description: "delete new objectives + develop action plan",
  },
];
// end mock datas for tasks block tabs

// start mock datas for ai engine block tabs

export const all = [
  {
    id: 1,
    time: "[18-Apr-2023 10:12:19]",
    description: "New order #3128 in the amount of 520 CHF.",
  },
  {
    id: 2,
    time: "[18-Apr-2023 10:13:29]",
    description: "Order #3128 has been sent for processing.",
  },
  {
    id: 3,
    time: "[18-Apr-2023 10:15:46]",
    description: "An email was sent to users who did not complete the order.",
  },
  {
    id: 4,
    time: "[18-Apr-2023 10:17:12]",
    description: "Prepared a report on site traffic - Open",
  },
  {
    id: 5,
    time: "[18-Apr-2023 10:23:37]",
    description: "Payment received 520 CHF",
  },
  {
    id: 6,
    time: "[18-Apr-2023 10:12:19]",
    description: "New order #3128 in the amount of 520 CHF.",
  },
  {
    id: 7,
    time: "[18-Apr-2023 10:13:29]",
    description: "Order #3128 has been sent for processing.",
  },
  {
    id: 8,
    time: "[18-Apr-2023 10:15:46]",
    description: "An email was sent to users who did not complete the order.",
  },
  {
    id: 9,
    time: "[18-Apr-2023 10:17:12]",
    description: "Prepared a report on site traffic - Open",
  },
  {
    id: 10,
    time: "[18-Apr-2023 10:23:37]",
    description: "Payment received 520 CHF",
  },
];

export const important = [
  {
    id: 1,
    time: "[18-Apr-2023 10:12:19]",
    description: "New order #3128 in the amount of 520 CHF.",
  },
  {
    id: 2,
    time: "[18-Apr-2023 10:13:29]",
    description: "Order #3128 has been sent for processing.",
  },
  {
    id: 3,
    time: "[18-Apr-2023 10:15:46]",
    description: "An email was sent to users who did not complete the order.",
  },
];

export const payment = [
  {
    id: 4,
    time: "[18-Apr-2023 10:17:12]",
    description: "Prepared a report on site traffic - Open",
  },
  {
    id: 5,
    time: "[18-Apr-2023 10:23:37]",
    description: "Payment received 520 CHF",
  },
];

export const report = [
  {
    id: 1,
    time: "[18-Apr-2023 10:12:19]",
    description: "New order #3128 in the amount of 520 CHF.",
  },
  {
    id: 2,
    time: "[18-Apr-2023 10:13:29]",
    description: "Order #3128 has been sent for processing.",
  },
  {
    id: 4,
    time: "[18-Apr-2023 10:17:12]",
    description: "Prepared a report on site traffic - Open",
  },
  {
    id: 5,
    time: "[18-Apr-2023 10:23:37]",
    description: "Payment received 520 CHF",
  },
];
// end mock datas for ai engine block tabs

export const accountsHistory = [
  {
    id: 1,
    title: "Agatech SpA",
    subtitle: "Invoice #2962",
    amount: 320,
    currency: "CHF",
    accountId: 1,
    created_at: moment().subtract(1, "months").unix(),
  },
  {
    id: 2,
    title: "Mueller plastic",
    subtitle: "Invoice #2961",
    amount: 750,
    currency: "CHF",
    accountId: 2,
    created_at: moment().subtract(1, "months").unix(),
  },

  {
    id: 3,
    title: "Robotec Ag",
    subtitle: "Invoice #2960",
    amount: -460,
    currency: "EUR",
    accountId: 1,
    created_at: moment().subtract(1, "months").subtract(2, "days").unix(),
  },
  {
    id: 4,
    title: "Phoenix Contact GmbH",
    subtitle: "Invoice #2959",
    amount: 230,
    currency: "CHF",
    accountId: 1,
    created_at: moment().subtract(1, "months").subtract(2, "days").unix(),
  },
  {
    id: 5,
    title: "RENE RAUTENBERG GmbH",
    subtitle: "Invoice #2957",
    amount: 900,
    currency: "USD",
    accountId: 2,
    created_at: moment().subtract(1, "months").subtract(2, "days").unix(),
  },
  {
    id: 6,
    title: "GRIS LLC",
    subtitle: "Payment order #81",
    amount: -150,
    currency: "EUR",
    accountId: 3,
    created_at: moment().subtract(1, "months").subtract(2, "days").unix(),
  },

  {
    id: 7,
    title: "JENTECH DA TENSYSTEME AG",
    subtitle: "Invoice #2957",
    amount: 2350,
    currency: "USD",
    accountId: 3,
    created_at: moment().subtract(1, "months").subtract(3, "days").unix(),
  },
  {
    id: 8,
    title: "Zebnet LLC",
    subtitle: "Payment order #80",
    amount: -299,
    currency: "USD",
    accountId: 3,
    created_at: moment().subtract(1, "months").subtract(3, "days").unix(),
  },
];

export const CHAT_DIALOG_STATUS_ACTIVE = 0;
export const CHAT_DIALOG_STATUS_DEFERRED = 1;
export const CHAT_DIALOG_STATUS_CLOSED = 2;
export const UNREAD = "unread";
export const READ = "read";

export const chatDialogs = [
  {
    id: 123123,
    message: "Got it, thanks!",
    status: CHAT_DIALOG_STATUS_ACTIVE,
    messages: [
      {
        id: 1,
        text: "Hello!",
        user_id: 1,
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        text: "Hello! How can I help you?",
        user_id: 2,
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        text: "Please tell me how I can place an order on your site?",
        user_id: 1,
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        text: "You need to select the desired item and add it to the cart, then pay for the order and we will deliver it to the specific address.",
        user_id: 2,
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    date: moment().unix(),
  },
  {
    id: 5252,
    message: "Thank you!",
    messages: [],
    status: CHAT_DIALOG_STATUS_ACTIVE,
    date: moment().subtract(2, "days").unix(),
  },
  {
    id: 52555,
    message: "Thank you very much!",
    messages: [],
    status: CHAT_DIALOG_STATUS_DEFERRED,
    date: moment().subtract(10, "days").unix(),
  },
];

export const receipts = [
  {
    id: 1,
    name: "Charged Cash",
    value: "84 CHF",
    created_at: moment().subtract(5, "days").unix(),
  },
  {
    id: 2,
    name: "Charged Cash",
    value: "84 CHF",
    created_at: moment().subtract(7, "days").unix(),
  },
  {
    id: 3,
    name: "Charged Cash",
    value: "84 CHF",
    created_at: moment().subtract(2, "month").unix(),
  },
  {
    id: 4,
    name: "Cache received",
    value: "1500 CHF",
    created_at: moment().subtract(5, "month").unix(),
  },
];

export const events = [
  {
    start_date: "2023-04-18 6:00",
    end_date: "2023-04-18 8:00",
    text: "Event 1",
    id: 1,
  },
  {
    start_date: "2023-04-21 10:00",
    end_date: "2023-04-21 18:00",
    text: "Event 2",
    id: 2,
  },
];

export const chatMessages = [
  {
    id: 444,
    firstName: "Tom",
    lastName: "Westervelt",
    lastMessage: "Sure you do, no worries about this problem",
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hi there, where are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "I am going to take a photo",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "What type of photo?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Wedding photography :)",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: tomAvatar,
    date: moment().subtract(10, "days").unix(),
  },
  {
    id: 111,
    firstName: "Ann",
    lastName: "Aminoff",
    lastMessage: "Yes, and also the other tasks are copmlete",
    status: UNREAD,
    new_messages: 2,
    avatar: annAvatar,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hey, have you finished that report for the deadline tomorrow?!",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "Almost done, just need to send the file. Hold on a sec...",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "No worries, take your time.",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Okay, sending it now.",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    date: moment().unix(),
  },
  {
    id: 222,
    firstName: "Aspen",
    lastName: "Vaccaro",
    lastMessage: "Ok, I will update the chart and come back to you",
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hey, how are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "Thanks I am good",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "Where ar you now?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "At gym",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: aspenAvatar,
    date: moment().subtract(2, "days").unix(),
  },
  {
    id: 333,
    firstName: "Gretchen",
    lastName: "Carder",
    lastMessage: "Can you please send your location?",
    status: UNREAD,
    new_messages: 3,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hi there, where are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "I am going to take a photo",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "What type of photo?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Wedding photography :)",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: gretchenAvatar,
    date: moment().subtract(10, "days").unix(),
  },
  {
    id: 555,
    firstName: "Tom",
    lastName: "Westervelt",
    lastMessage: "Sure you do, no worries about this problem",
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hey, have you finished that report for the deadline tomorrow?!",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "Almost done, just need to send the file. Hold on a sec...",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "No worries, take your time.",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Okay, sending it now.",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: tomAvatar,
    date: moment().subtract(10, "days").unix(),
  },
  {
    id: 666,
    firstName: "Ann",
    lastName: "Aminoff",
    lastMessage: "Yes, and also the other tasks are copmlete",
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hey, how are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "Thanks I am good",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "Where ar you now?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "At gym",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: annAvatar,
    date: moment().unix(),
  },
  {
    id: 777,
    firstName: "Aspen",
    lastName: "Vaccaro",
    lastMessage: "Ok, I will update the chart and come back to you",
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hi there, where are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "I am going to take a photo",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "What type of photo?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Wedding photography :)",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: aspenAvatar,
    date: moment().subtract(2, "days").unix(),
  },
  {
    id: 888,
    firstName: "Gretchen",
    lastName: "Carder",
    lastMessage: "Can you please send your location?",
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hi there, where are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "I am going to take a photo",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "What type of photo?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Wedding photography :)",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: gretchenAvatar,
    date: moment().subtract(10, "days").unix(),
  },
  {
    id: 999,
    firstName: "Tom",
    lastName: "Westervelt",
    lastMessage: "Sure you do, no worries about this problem",
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hey, have you finished that report for the deadline tomorrow?!",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "Almost done, just need to send the file. Hold on a sec...",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "No worries, take your time.",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Okay, sending it now.",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: tomAvatar,
    date: moment().subtract(10, "days").unix(),
  },
  {
    id: 1000,
    firstName: "Ann",
    lastName: "Aminoff",
    lastMessage: "Yes, and also the other tasks are copmlete",
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hey, how are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "Thanks I am good",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "Where ar you now?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "At gym",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: annAvatar,
    date: moment().unix(),
  },
  {
    id: 1100,
    firstName: "Aspen",
    lastName: "Vaccaro",
    lastMessage: "Ok, I will update the chart and come back to you",
    status: READ,
    new_messages: 0,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hi there, where are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "I am going to take a photo",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "What type of photo?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Wedding photography :)",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: aspenAvatar,
    date: moment().subtract(2, "days").unix(),
  },
  {
    id: 1200,
    firstName: "Gretchen",
    lastName: "Carder",
    lastMessage: "Can you please send your location?",
    status: UNREAD,
    new_messages: 1,
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Hi there, where are you?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").unix(),
      },
      {
        id: 2,
        texts: [
          {
            text: "I am going to take a photo",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(2, "minutes").unix(),
      },
      {
        id: 3,
        texts: [
          {
            text: "What type of photo?",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 4,
        texts: [
          {
            text: "Wedding photography :)",
          },
        ],
        user_id: "own",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
      {
        id: 5,
        texts: [
          {
            text: "Great!",
          },
          {
            text: "Let me know",
          },
          {
            text: "when you are free",
          },
          {
            text: "I have a good news for you",
          },
          {
            text: "Great, thanks! Wait, did you just send me a picture of a cat?",
          },
          {
            text: "Lorem ipsum dolor sit amet",
          },
          {
            text: "Lorem ipsum",
          },
        ],
        user_id: "friend",
        created_at: moment().subtract(5, "day").add(10, "minutes").unix(),
      },
    ],
    avatar: gretchenAvatar,
    date: moment().subtract(10, "days").unix(),
  },
];

export const notes = [
  {
    id: 1,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test descriptionLorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description",
    year: "2023",
    month: "March",
    day: "15",
    time: "14:25",
  },
  {
    id: 2,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "2023",
    month: "April",
    day: "10",
    time: "10:25",
  },
  {
    id: 3,
    title: "Lorem ipsum Note title",
    message: "Lorem ipsum test description Lorem ipsum test description",
    year: "2023",
    month: "March",
    day: "15",
    time: "14:25",
  },
  {
    id: 4,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "2023",
    month: "April",
    day: "10",
    time: "10:25",
  },
  {
    id: 5,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "2023",
    month: "March",
    day: "15",
    time: "14:25",
  },
  {
    id: 6,
    title: "Lorem ipsum Note title",
    message: "Lorem ipsum test description Lorem ipsum test description",
    year: "2023",
    month: "April",
    day: "10",
    time: "10:25",
  },
  {
    id: 7,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "2023",
    month: "March",
    day: "15",
    time: "14:25",
  },
  {
    id: 8,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "2023",
    month: "April",
    day: "10",
    time: "10:25",
  },
  {
    id: 9,
    title: "Lorem ipsum Note title",
    message: "Lorem ipsum test description Lorem ipsum test description",
    year: "2023",
    month: "March",
    day: "15",
    time: "14:25",
  },
  {
    id: 10,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "April",
    month: "04",
    day: "10",
    time: "10:25",
  },
  {
    id: 11,
    title: "Lorem ipsum Note title",
    message:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
    year: "2023",
    month: "March",
    day: "15",
    time: "14:25",
  },
  {
    id: 12,
    title: "Lorem ipsum Note title",
    message: "Lorem ipsum test description Lorem ipsum test description",
    year: "2023",
    month: "April",
    day: "10",
    time: "10:25",
  },
];

export const notifications = [
  {
    id: 1,
    title: `Let us know if you've registered for a tax number`,
    message:
      "Update your billing setting if you have a tax number for your buisiness.",
    category: "Billing",
    month: "March",
    day: "18",
    time: "14:25",
  },
  {
    id: 2,
    title: "Your billing payment failed!",
    message: `The $24.0 payment for your shopify bill couldn't be processed because of a problem with your payment method`,
    category: "Billing",
    month: "March",
    day: "15",
    time: "09:45",
  },
  {
    id: 3,
    title: "Let us know if you have registered for a tax number",
    message:
      "Update your billing setting if you have a tax number for your buisiness.",
    category: "Billing",
    month: "March",
    day: "18",
    time: "14:25",
  },
  {
    id: 4,
    title: "Your billing payment failed!",
    message: `The $24.0 payment for your shopify bill couldn't be processed because of a problem with your payment method`,
    category: "Billing",
    month: "March",
    day: "15",
    time: "09:45",
  },
  {
    id: 5,
    title: "Let us know if you have registered for a tax number",
    message:
      "Update your billing setting if you have a tax number for your buisiness.",
    category: "Billing",
    month: "March",
    day: "18",
    time: "14:25",
  },
  {
    id: 6,
    title: "Your billing payment failed!",
    message: `The $24.0 payment for your shopify bill couldn't be processed because of a problem with your payment method`,
    category: "Billing",
    month: "March",
    day: "15",
    time: "09:45",
  },
  {
    id: 7,
    title: "Let us know if you have registered for a tax number",
    message:
      "Update your billing setting if you have a tax number for your buisiness.",
    category: "Billing",
    month: "March",
    day: "18",
    time: "14:25",
  },
  {
    id: 8,
    title: "Your billing payment failed!",
    message: `The $24.0 payment for your shopify bill couldn't be processed because of a problem with your payment method`,
    category: "Billing",
    month: "March",
    day: "15",
    time: "09:45",
  },
  {
    id: 9,
    title: "Let us know if you have registered for a tax number",
    message:
      "Update your billing setting if you have a tax number for your buisiness.",
    category: "Billing",
    month: "March",
    day: "18",
    time: "14:25",
  },
  {
    id: 10,
    title: "Your billing payment failed!",
    message: `The $24.0 payment for your shopify bill couldn't be processed because of a problem with your payment method`,
    category: "Billing",
    month: "March",
    day: "15",
    time: "09:45",
  },
  {
    id: 11,
    title: "Let us know if you have registered for a tax number",
    message:
      "Update your billing setting if you have a tax number for your buisiness.",
    category: "Billing",
    month: "March",
    day: "18",
    time: "14:25",
  },
  {
    id: 12,
    title: "Your billing payment failed!",
    message: `The $24.0 payment for your shopify bill couldn't be processed because of a problem with your payment method`,
    category: "Billing",
    month: "March",
    day: "15",
    time: "09:45",
  },
];

export const assistants = [
  {
    id: 1,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
      {
        id: 4,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "own",
      },
      {
        id: 5,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 2,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 3,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
      {
        id: 4,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "own",
      },
      {
        id: 5,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 4,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 5,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
      {
        id: 4,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "own",
      },
      {
        id: 5,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 6,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 7,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
      {
        id: 4,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "own",
      },
      {
        id: 5,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 8,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 9,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
      {
        id: 4,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "own",
      },
      {
        id: 5,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 10,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 11,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
      {
        id: 4,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "own",
      },
      {
        id: 5,
        texts: [
          {
            text: "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description ",
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
  {
    id: 12,
    title: "Lorem ipsum Assistant title",
    subtitle:
      "Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test description Lorem ipsum test",
    messages: [
      {
        id: 1,
        texts: [
          {
            text: "Welcome message from AI assistant",
          },
        ],
        user_id: "bot",
      },
      {
        id: 2,
        texts: [
          {
            text: "Pellentesque lobortis, velit eget, est arcu tristique leo, suscipit consequat augue?",
          },
        ],
        user_id: "own",
      },
      {
        id: 3,
        texts: [
          {
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet nisi ex.

            1. Vestibulum odio mauris, sagus a, euismod 
            2. Sagittis mauris. Lorem: Lorem Ipsum
            
            Vestibulum odio mauris, sagittis et lacus sagittis mauris. Lorem.
            `,
          },
        ],
        user_id: "bot",
      },
    ],
    avatar: searchIcon,
  },
];

export const user_info = {
    id: 1,
    firstname: 'david',
    lastname: 'ackerman',
    mail: 'david.ackerman@gmail.com',
    avatar: tomAvatar,
}

export const Calendar_page_current_events = [
  {
    id: 1,
    name: 'Personal',
    color: '#653EB9',
    category: 'Personal'
  },
  {
    id: 2,
    name: 'Public',
    color: '#4C9FBE',
    category: 'Public'
  },
  {
    id: 3,
    name: 'Birthday',
    color: '#C6870E',
    category: 'Birthday'
  },
  {
    id: 4,
    name: 'Holiday',
    color: '#4C91DD',
    category: 'Holiday'
  }
]

export const mailsCategory = [
  {
    id: 1,
    title: 'Inbox',
    unreadNum: 2
  },
  {
    id: 2,
    title: 'Sent',
  },
  {
    id: 3,
    title: 'Starred',
  },
  {
    id: 4,
    title: 'Trash',
  },
  {
    id: 5,
    title: 'With file',
  },
  {
    id: 6,
    title: 'Spam',
  },
  {
    id: 7,
    title: 'Drafts',
  },
]

export const emails = [
  {
    id: 1,
    unread: true,
    mark: false,
    title: 'Lucie Laurent',
    message: 'I hope this message finds you well. Our team at Vegacity has been impressed by your message. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 01',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Product Feedback',
    name: 'Sophie Martin',
    color: '#6F194F'
  },
  {
    id: 2,
    unread: true,
    mark: true,
    title: 'Peter Koch',
    message: 'Dear Christine, I hope this message finds you well. Our team has Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 02',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Exciting Partnership Opportunity',
    name: 'Nico Keller',
    color: '#FBADD8'
  },
  {
    id: 3,
    logo: emailLogo1,
    unread: true,
    mark: false,
    title: 'Dominick Murray',
    message: 'I wanted to inform you of a slight adjustment to the project Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 03',
    attached: true,
    attachedFile: mockEmailPDF,
    attachedNumber: 1,
    attachedName: 'new admin tasks.pdf',
    attachedType: 'pdf',
    from: 'eva.baumann@helvetic.com',
    to: 'you@example.com',
    subject: 'Important Update on Project Timeline',
    color: '#3A676F'
  },
  {
    id: 4,
    unread: true,
    mark: false,
    title: 'Lorraine Rhodes',
    message: 'Hi, sure, I will soon update the schedule based on the do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 04',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'New admin task',
    name: 'Jane Keller',
    color: '#E69B3D'
  },
  {
    id: 5,
    unread: false,
    mark: true,
    title: 'This is test email five',
    message: 'Dear Christine, I hope this message finds you in good spirits. We have been Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 05',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Collaboration Proposal',
    name: 'Maya Nederman',
    color: '#B4C846'
  },
  {
    id: 6,
    logo: emailLogo2,
    unread: false,
    mark: false,
    title: 'This is test email six',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 06',
    attached: false,
    from: 'luca.mueller@alpineco.com',
    to: 'you@example.com',
    subject: 'Invitation to our Upcoming Networking Event',
    color: '#3B1CC9'
  },
  {
    id: 7,
    unread: false,
    mark: false,
    title: 'This is test email seven',
    message: 'We are excited to invite you to our upcoming webinar on international Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 07',
    attached: true,
    attachedFile: mockEmailphoto,
    attachedNumber: 1,
    attachedName: 'test-image.png',
    attachedType: 'png',
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Upcoming Webinar Invitation',
    name: 'Lukas Müller',
    color: '#E06043'
  },
  {
    id: 8,
    logo: emailLogo3,
    unread: false,
    mark: true,
    title: 'This is test email eight',
    message: 'I wanted to take a moment to acknowledge the outstanding contributions with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 08',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Employee Recognition',
    name: 'Lea Herz',
    color: '#6F194F'
  },
  {
    id: 9,
    unread: false,
    mark: false,
    title: 'This is test email nine',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 09',
    attached: false,
    from: 'fabian.roth@helveticgro.com',
    to: 'you@example.com',
    subject: 'Request for Proposal Submission  ',
    color: '#FBADD8'
  },
  {
    id: 10,
    unread: false,
    mark: true,
    title: 'This is test email ten',
    message: 'Dear Team, As part of our commitment to professional development, we wanted Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 10',
    attached: false,
    from: 'emma.baer@alpinco.com',
    to: 'you@example.com',
    subject: 'Manager Training Session',
    color: '#3A676F'
  },
  {
    id: 11,
    logo: emailLogo4,
    unread: false,
    mark: false,
    title: 'This is test email eleven',
    message: 'Hello Christine, with this message I send you Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 11',
    attached: true,
    attachedFile: mockEmailPDF,
    attachedNumber: 1,
    attachedName: 'new admin tasks.pdf',
    attachedType: 'pdf',
    from: 'nicoroth@swissgroup.com',
    to: 'you@example.com',
    subject: 'Completed video for homepage - Review',
    color: '#E69B3D'
  },
  {
    id: 12,
    unread: false,
    mark: false,
    title: 'This is test email twelve',
    message: 'Dear Dupont, We hope this message finds you well. This is a friendly reminder you Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 12',
    attached: false,
    from: 'isabellafischer@alpinec.com',
    to: 'you@example.com',
    subject: 'Invoice Reminder',
    color: '#B4C846'
  },
  {
    id: 13,
    logo: emailLogo5,
    unread: false,
    mark: false,
    title: 'This is test email thirteen',
    message: 'Dear Christine Dupont, You are invited to our upcoming networking even Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 13',
    attached: false,
    from: 'vivictori.graf@alpinesys.com',
    to: 'you@example.com',
    subject: 'Networking Event Invitation',
    color: '#3B1CC9'
  },
  {
    id: 14,
    unread: false,
    mark: false,
    title: 'This is test email fourteen',
    message: 'Dear Christine, I hope this message finds you in good spirits. We have been Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 14',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Request for Proposal Submission  ',
    name: 'Viktor fabian',
    color: '#E06043'
  },
  {
    id: 15,
    logo: emailLogo1,
    unread: false,
    mark: true,
    title: 'This is test email fifteen',
    message: 'Hi, sure, I will soon update the schedule based on the do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 15',
    attached: true,
    attachedFile: mockEmailphoto,
    attachedNumber: 1,
    attachedName: 'test-image.png',
    attachedType: 'png',
    from: 'vivic.graf@alpinesys.com',
    to: 'you@example.com',
    subject: 'Completed video for homepage - Review',
    color: '#3A676F'
  },
  {
    id: 16,
    unread: false,
    mark: false,
    title: 'This is test email sixteen',
    message: 'Dear Christine, I hope this message finds you in good spirits. We have been Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 16',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Request for Proposal Submission  ',
    name: 'Daniel grow',
    color: '#6F194F'
  },
  {
    id: 17,
    unread: false,
    mark: false,
    title: 'This is test email seventeen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 17',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Upcoming Webinar Invitation',
    name: 'Abi brown',
    color: '#FBADD8'
  },
  {
    id: 18,
    unread: false,
    mark: true,
    title: 'This is test email eighteen',
    message: 'We are excited to invite you to our upcoming webinar on international Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 18',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'New admin task -  Corrections on schedule for webinars',
    name: 'peter down',
    color: '#3A676F'
  },
  {
    id: 19,
    logo: emailLogo2,
    unread: false,
    mark: false,
    title: 'This is test email nineteen',
    message: 'I wanted to take a moment to acknowledge the outstanding contributions with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 19',
    attached: false,
    from: 'isabellafischer@alpinec.com',
    to: 'you@example.com',
    subject: 'Important Update on Project Timeline',
    color: '#E69B3D'
  },
  {
    id: 20,
    unread: false,
    mark: false,
    title: 'This is test email twenty',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 20',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Exciting Partnership Opportunity',
    name: 'Delle nia',
    color: '#B4C846'
  },
  {
    id: 21,
    logo: emailLogo3,
    unread: false,
    mark: true,
    title: 'This is test email twenty one',
    message: 'Dear Team, As part of our commitment to professional development, we wanted Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 17',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Product Feedback ',
    name: 'tom addel',
    color: '#3B1CC9'
  },
  {
    id: 22,
    unread: false,
    mark: false,
    title: 'Hello Christine, with this message I send you Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 18',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Invoice Reminder',
    name: 'cristian bell',
    color: '#E06043'
  },
  {
    id: 23,
    unread: false,
    mark: false,
    title: 'This is test email twenty three',
    message: 'Dear Dupont, We hope this message finds you well. This is a friendly reminder you Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 19',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Networking Event Invitation',
    name: 'garry lwis',
    color: '#E69B3D'
  },
  {
    id: 24,
    logo: emailLogo4,
    unread: false,
    mark: false,
    title: 'This is test email twenty four',
    message: 'Dear Christine Dupont, You are invited to our upcoming networking even Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 20',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'Invitation to our Upcoming Networking Event',
    name: 'joe coll',
    color: '#6F194F'
  },
]

export const sentEmails = [
  {
    id: 1,
    logo: emailLogo,
    unread: false,
    title: 'This is test email one',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 01 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 2,
    unread: false,
    title: 'This is test email two',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 02 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 3,
    logo: emailLogo,
    unread: false,
    title: 'This is test email three',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 03 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 4,
    unread: false,
    title: 'This is test email four',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 04 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 5,
    unread: false,
    title: 'This is test email five',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 05 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 6,
    logo: emailLogo,
    unread: false,
    title: 'This is test email six',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 06 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 7,
    unread: false,
    title: 'This is test email seven',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 07 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 8,
    unread: false,
    title: 'This is test email eight',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 08 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 9,
    logo: emailLogo,
    unread: false,
    title: 'This is test email nine',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 09 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 10,
    unread: false,
    title: 'This is test email ten',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 10 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 11,
    unread: false,
    title: 'This is test email eleven',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 11 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 12,
    unread: false,
    title: 'This is test email twelve',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 12 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 13,
    logo: emailLogo,
    unread: false,
    title: 'This is test email thirteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 13 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 14,
    unread: false,
    title: 'This is test email fourteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 14 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 15,
    logo: emailLogo,
    unread: false,
    title: 'This is test email fifteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 15 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 16,
    unread: false,
    title: 'This is test email sixteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 16 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 17,
    logo: emailLogo,
    unread: false,
    title: 'This is test email seventeen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 17 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 18,
    unread: false,
    title: 'This is test email eighteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 18 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 19,
    unread: false,
    title: 'This is test email nineteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 19 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 20,
    logo: emailLogo,
    unread: false,
    title: 'This is test email twenty',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 20 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 21,
    logo: emailLogo,
    unread: false,
    title: 'This is test email twenty one',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 17 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 22,
    unread: false,
    title: 'This is test email twenty two',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 18 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 23,
    unread: false,
    title: 'This is test email twenty three',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 19 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 24,
    logo: emailLogo,
    unread: false,
    title: 'This is test email twenty four',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 20 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
]

export const deletedEmails = [
  {
    id: 1,
    logo: emailLogo,
    unread: false,
    title: 'This is test email one',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 01 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 2,
    unread: false,
    title: 'This is test email two',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 02 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 3,
    logo: emailLogo,
    unread: false,
    title: 'This is test email three',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 03 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 4,
    unread: false,
    title: 'This is test email four',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 04 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 5,
    unread: false,
    title: 'This is test email five',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 05 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 6,
    logo: emailLogo,
    unread: false,
    title: 'This is test email six',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 06 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 7,
    unread: false,
    title: 'This is test email seven',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 07 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 8,
    unread: false,
    title: 'This is test email eight',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 08 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 9,
    logo: emailLogo,
    unread: false,
    title: 'This is test email nine',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 09 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 10,
    unread: false,
    title: 'This is test email ten',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 10 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 11,
    unread: false,
    title: 'This is test email eleven',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 11 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 12,
    unread: false,
    title: 'This is test email twelve',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 12 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 13,
    logo: emailLogo,
    unread: false,
    title: 'This is test email thirteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 13 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 14,
    unread: false,
    title: 'This is test email fourteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 14 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 15,
    logo: emailLogo,
    unread: false,
    title: 'This is test email fifteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 15 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 16,
    unread: false,
    title: 'This is test email sixteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 16 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 17,
    logo: emailLogo,
    unread: false,
    title: 'This is test email seventeen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 17 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 18,
    unread: false,
    title: 'This is test email eighteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 18 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 19,
    unread: false,
    title: 'This is test email nineteen',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 19 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 20,
    logo: emailLogo,
    unread: false,
    title: 'This is test email twenty',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 20 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 21,
    logo: emailLogo,
    unread: false,
    title: 'This is test email twenty one',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 17 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 22,
    unread: false,
    title: 'This is test email twenty two',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 18 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 23,
    unread: false,
    title: 'This is test email twenty three',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: true,
    date: 'Apr 19 2023',
    attached: false,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
  {
    id: 24,
    logo: emailLogo,
    unread: false,
    title: 'This is test email twenty four',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.',
    starred: false,
    date: 'Apr 20 2023',
    attached: true,
    from: 'test@example.com',
    to: 'you@example.com',
    subject: 'this is a test subject'
  },
]

export const upcomingMeetings = [
  {
    id: 1,
    day_id: '18/05/24',
    meetings: [
      {
        id: 1,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '15:00',
        time_to: '16:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '16:00',
        time_to: '17:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '17:00',
        time_to: '18:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
      },
    ],
  },
  {
    id: 2,
    day_id: '14/05/24',
    meetings: [
      {
        id: 1,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '15:00',
        time_to: '16:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '16:00',
        time_to: '17:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '17:00',
        time_to: '18:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
    ],
  },
  {
    id: 3,
    day_id: '10/04/24',
    meetings: [
      {
        id: 1,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '15:00',
        time_to: '16:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '16:00',
        time_to: '17:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        date: '18/05/24',
        time_from: '17:00',
        time_to: '18:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
      },
    ],
  },
];

export const recentMeetings = [
  {
    id: 1,
    day_id: '18/05/23',
    meetings: [
      {
        id: 1,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '15:00',
        time_to: '16:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '16:00',
        time_to: '17:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '17:00',
        time_to: '18:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
    ],
  },
  {
    id: 2,
    day_id: '14/05/23',
    meetings: [
      {
        id: 1,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '15:00',
        time_to: '16:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '16:00',
        time_to: '17:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '17:00',
        time_to: '18:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
    ],
  },
  {
    id: 3,
    day_id: '10/04/23',
    meetings: [
      {
        id: 1,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '15:00',
        time_to: '16:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 2,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '16:00',
        time_to: '17:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
      {
        id: 3,
        name: 'Lorem Ipsum',
        date: '18/05/23',
        time_from: '17:00',
        time_to: '18:00',
        description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,',
      },
    ],
  },
];

export const invoicesCategory = [
  {
    id: 1,
    title: 'Invoices',
    // grayIcon: inboxIconGray,
    // blueIcon: inboxIconBlue,
  },
  {
    id: 2,
    title: 'Money',
    // grayIcon: draftsIconGray,
    // blueIcon: draftsIconBlue,
  },
  {
    id: 3,
    title: 'Clients',
    // grayIcon: sentIconGray,
    // blueIcon: sentIconBlue,
  },
  {
    id: 4,
    title: 'Products',
    // grayIcon: starredIconGray,
    // blueIcon: starredIconBlue,
  },
]

export const invoices = [
  {
    id: 1,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'paid',
    creator: 'Mike brown',
  },
  {
    id: 2,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'due',
    creator: 'David brown',
  },
  {
    id: 3,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'overdue',
    creator: 'Mike brown',
  },
  {
    id: 4,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'draft',
    creator: 'David brown',
  },

  {
    id: 5,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'paid',
    creator: 'Mike brown',
  },
  {
    id: 6,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'due',
    creator: 'David brown',
  },
  {
    id: 7,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'overdue',
    creator: 'Mike brown',
  },
  {
    id: 8,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'draft',
    creator: 'David brown',
  },
  

  {
    id: 9,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'paid',
    creator: 'Mike brown',
  },
  {
    id: 10,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'due',
    creator: 'David brown',
  },
  {
    id: 11,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'overdue',
    creator: 'Mike brown',
  },
  {
    id: 12,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'draft',
    creator: 'David brown',
  },

  
  {
    id: 13,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'paid',
    creator: 'Mike brown',
  },
  {
    id: 14,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'due',
    creator: 'David brown',
  },
  {
    id: 15,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'overdue',
    creator: 'Mike brown',
  },
  {
    id: 16,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'draft',
    creator: 'David brown',
  },
  

  {
    id: 17,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'paid',
    creator: 'Mike brown',
  },
  {
    id: 18,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'due',
    creator: 'David brown',
  },
  {
    id: 19,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'overdue',
    creator: 'David brown',
  },
  {
    id: 20,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'draft',
    creator: 'David brown',
  },
  
  {
    id: 21,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'paid',
    creator: 'Mike brown',
  },
  {
    id: 22,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'due',
    creator: 'David brown',
  },
  {
    id: 23,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'overdue',
    creator: 'Mike brown',
  },
  {
    id: 24,
    date: '06-21-2023',
    company: 'everbright company',
    project: 'project name',
    amount: '$1,600.00',
    payment: '$1,600.00',
    status: 'draft',
    creator: 'David brown',
  },
]

export const money = [
  {
    id: 1,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 2,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
    billable: true
  },
  {
    id: 3,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 4,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
    billable: true
  },

  {
    id: 5,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 6,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
    billable: true
  },
  {
    id: 7,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 8,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  

  {
    id: 9,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 10,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 11,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 12,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },

  
  {
    id: 13,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 14,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 15,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 16,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  

  {
    id: 17,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 18,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 19,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 20,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  
  {
    id: 21,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 22,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 23,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'plus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
  {
    id: 24,
    date: '06-21-2023',
    description: 'Lorem ipsum',
    status: 'minus',
    amount: '500.00',
    client: 'client name',
    project: 'project name',
    invoice: 'INV-000010',
    paymentMethod: 'Paypal',
    transactionID: 'Jdh37HJDK63837',
    category: 'Category 1',
  },
]

export const clients = [
  {
    id: 1,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 2,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },
  {
    id: 3,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 4,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },

  {
    id: 5,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },
  {
    id: 6,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 7,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 8,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  

  {
    id: 9,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },
  {
    id: 10,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 11,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 12,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },

  
  {
    id: 13,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 14,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 15,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 16,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },
  

  {
    id: 17,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 18,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 19,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },
  {
    id: 20,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  
  {
    id: 21,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 22,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: false,
  },
  {
    id: 23,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
  {
    id: 24,
    date: '06-21-2023',
    company: 'Company name',
    owner: 'Owner name',
    ownerImage: clientImage,
    companyLogo: companyLogo,
    projectsNumber: 3,
    invoicesAmount: '0.00',
    tags: [
      'seo-marketing',
      'web-design'
    ],
    category: 'Category 1',
    status: true,
  },
]

export const products = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },

  {
    id: 5,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 6,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 7,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 8,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  

  {
    id: 9,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 10,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 11,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 12,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },

  
  {
    id: 13,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 14,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 15,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 16,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  

  {
    id: 17,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 18,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 19,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 20,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  
  {
    id: 21,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 22,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 23,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
  {
    id: 24,
    description: 'Lorem ipsum dolor sit amet consecteur',
    rate: '125.00',
    unit: 'Each',
    category: 'Category 1',
  },
]

export const sampleTasks = {
  "lists": {
      "list-1": {
          "id": "list-1",
          "title": "Backlog",
          "cards": [
              {
                  "id": "69ee76ea-73df-4bd4-9416-c438df394dc9",
                  "title": "Make new logo",
                  "description": "sxsaxas",
                  "comments": [
                      {
                          "id": "fafc6fd0-faae-4448-9fd0-4220529d30b5",
                          "text": "sdcsdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "077ec368-0189-4f43-9e8a-cbdca5a228bf",
                          "text": "scdcsdcsdcsd",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "76fbddd1-d8c4-4b01-b453-970dadd90046",
                          "text": "sdcsdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "62acf846-c8d0-4744-b07f-eb899738b8cb",
                          "text": "sdcsdcsdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "297fffde-06a9-426f-a157-2668b49bdc4b",
                          "text": "sdcsdcsdcsdcs",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "ab9fb1b3-eb53-469b-8fc9-4b29521d8dd3",
                          "text": "sdcsdcsdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      }
                  ],
                  "tags": [
                      "Easy",
                      "Normal"
                  ],
                  "members": [
                      avatar1,
                      avatar2,
                      avatar3,
                  ],
                  "color": "#BBD5FA"
              },
              {
                  "id": "674325d4-a451-4b00-8fe3-f9684083071e",
                  "title": "Test new website",
                  "description": "asxasxasx",
                  "comments": [],
                  "tags": [
                      "Webix",
                      "Hard"
                  ],
                  "members": [
                      avatar1
                  ],
                  "color": "#ADFCF8"
              },
              {
                  "id": "cb5ab410-2b70-4b50-a8ed-38c4b7bb8a35",
                  "title": "Send a quote to a customer",
                  "description": "xasxasx",
                  "comments": [
                      {
                          "id": "c2b0a33d-b54f-47d9-a341-f7c37af0fb10",
                          "text": "asxasxasx",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "12:15"
                      }
                  ],
                  "tags": [
                      "Normal"
                  ],
                  "members": [],
                  "color": "#ADFCF8"
              },
              {
                  "id": "2b1949e4-3c61-4947-a566-ec4bd9bd8273",
                  "title": "Find a new supplier",
                  "description": "asxasx",
                  "comments": [],
                  "tags": [
                      "Webix"
                  ],
                  "members": [
                      avatar3,
                      avatar2
                  ],
                  "color": "#ADFCF8"
              },
              {
                  "id": "9248b044-ead3-4b9f-b24c-351beb719e4e",
                  "title": "Make new logo",
                  "description": "asxsax",
                  "comments": [],
                  "tags": [
                      "Webix"
                  ],
                  "members": [],
                  "color": "#BBD5FA"
              },
              {
                  "id": "935c1e5e-a66f-4a38-8b1d-03b938580efc",
                  "title": "Test new website",
                  "description": "axsx",
                  "comments": [],
                  "tags": [
                      "Webix",
                      "Hard"
                  ],
                  "members": [
                      avatar1,
                      avatar3
                  ],
                  "color": "#ADFCF8"
              }
          ]
      },
      "list-2": {
          "id": "list-2",
          "title": "In Progress",
          "cards": [
              {
                  "id": "13e71312-ce80-406b-8a36-4529d77251de",
                  "title": "Make new logo",
                  "description": "asxasx",
                  "comments": [],
                  "tags": [
                      "Jet"
                  ],
                  "members": [
                      avatar2
                  ],
                  "color": "#ADFCF8"
              },
              {
                  "id": "bb3f0b51-f5e7-4732-8380-a296e27c4b6a",
                  "title": "Test new website",
                  "description": "asxasx",
                  "comments": [
                      {
                          "id": "0aa873bb-e3a9-4c1c-af5b-16597322420a",
                          "text": "csdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "7af9374d-f133-44b2-8fff-01fe326bab4d",
                          "text": "sdcsdcs",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      },
                      {
                          "id": "595a7de2-a88c-41d3-afd1-142a7194d7a3",
                          "text": "sdcsdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      }
                  ],
                  "tags": [],
                  "members": [
                      avatar3
                  ],
                  "color": "#ADFCF8"
              }
          ]
      },
      "list-3": {
          "id": "list-3",
          "title": "Done",
          "cards": [
              {
                  "id": "02517a49-b88d-4938-b6f7-8b80bd1cb345",
                  "title": "Make new logo",
                  "description": "saxasx",
                  "comments": [
                      {
                          "id": "e4fd3c40-29cc-407e-8ec4-69e4a2813253",
                          "text": "sdcsdc",
                          "day": 21,
                          "month": "Aug",
                          "year": "2023",
                          "time": "11:43"
                      }
                  ],
                  "tags": [
                      "Hard"
                  ],
                  "members": [
                      avatar1,
                      avatar3,
                      avatar2,
                      avatar1,
                      avatar3,
                      avatar2
                  ],
                  "color": "#ADFCF8"
              }
          ]
      },
      "list-4": {
          "id": "list-4",
          "title": "Closed",
          "cards": [
              {
                  "id": "a29ed881-479b-426b-b2e8-1f9524061348",
                  "title": "Make new logo",
                  "description": "asxasxa",
                  "comments": [],
                  "tags": [],
                  "members": [],
                  "color": "#ADFCF8"
              }
          ]
      }
  },
  "listIds": [
      "list-1",
      "list-2",
      "list-3",
      "list-4"
  ],
  "members": [
      "David",
      "Carlos",
      "Mateo",
      "Rick",
      "Martin",
      "Cristiano"
  ]
}

export const driveData = [
  {
    id: 1,
    name: 'Documents',
    date: '07-08-2023',
    size: '25.14MB',
    type: 'Folder',
    icon: driveFolder,
  },
  {
    id: 4,
    name: 'Videos',
    date: '14-08-2023',
    size: '48.15MB',
    type: 'Folder',
    icon: driveVideoFolder,
  },
  {
    id: 8,
    name: 'logo.png',
    date: '11-09-2023',
    size: '01.05MB',
    type: 'PNG',
    icon: drivePhoto,
  },
  {
    id: 5,
    name: 'readme.txt',
    date: '01-09-2023',
    size: '25.14MB',
    type: 'Text',
    icon: driveTxt,
  },
  {
    id: 2,
    name: 'Code',
    date: '08-08-2023',
    size: '14.02MB',
    type: 'Folder',
    icon: driveCodeFolder,
  },
  {
    id: 3,
    name: 'UI Design',
    date: '12-08-2023',
    size: '06.80MB',
    type: 'Folder',
    icon: driveFolder,
  },
  {
    id: 6,
    name: 'readme.txt',
    date: '10-09-2023',
    size: '15.14MB',
    type: 'Text',
    icon: driveTxt,
  },
  {
    id: 7,
    name: 'Data (12).xlsx',
    date: '10-09-2023',
    size: '01.14MB',
    type: 'Excel',
    icon: driveExcel,
  },
  {
    id: 9,
    name: 'readme.txt',
    date: '15-09-2023',
    size: '02.14MB',
    type: 'Text',
    icon: driveTxt,
  },
  {
    id: 10,
    name: 'logo-new.png',
    date: '16-09-2023',
    size: '07.50MB',
    type: 'PNG',
    icon: drivePhoto,
  },
  {
    id: 11,
    name: 'Data (13).xlsx',
    date: '18-09-2023',
    size: '03.60MB',
    type: 'Excel',
    icon: driveExcel,
  },
  {
    id: 12,
    name: 'logo-new.png',
    date: '25-09-2023',
    size: '15.14MB',
    type: 'PNG',
    icon: drivePhoto,
  },

  {
    id: 13,
    name: 'Documents',
    date: '07-08-2023',
    size: '25.14MB',
    type: 'Folder',
    icon: driveFolder,
  },
  {
    id: 14,
    name: 'Videos',
    date: '14-08-2023',
    size: '48.15MB',
    type: 'Folder',
    icon: driveVideoFolder,
  },
  {
    id: 15,
    name: 'logo.png',
    date: '11-09-2023',
    size: '01.05MB',
    type: 'PNG',
    icon: drivePhoto,
  },
  {
    id: 16,
    name: 'readme.txt',
    date: '01-09-2023',
    size: '25.14MB',
    type: 'Text',
    icon: driveTxt,
  },
  {
    id: 17,
    name: 'Code',
    date: '08-08-2023',
    size: '14.02MB',
    type: 'Folder',
    icon: driveCodeFolder,
  },
  {
    id: 18,
    name: 'UI Design',
    date: '12-08-2023',
    size: '06.80MB',
    type: 'Folder',
    icon: driveFolder,
  },
]

export const sampleUsers = [
  {
    id: 1,
    name: 'Karoline Damgaard',
    email: 'karoline@damgaard.com',
    image: user1,
  },
  {
    id: 2,
    name: 'Alice Kirk',
    email: 'alicekirk@gmail.com',
    image: user2,
  },
  {
    id: 3,
    name: 'Danny Jepsen',
    email: 'dannyjepsen@gmail.com',
    image: user3,
  },
  {
    id: 4,
    name: 'Oda Bundgaard',
    email: 'odabundgaard@mortensen.com',
    image: user4,
  },
  {
    id: 5,
    name: 'Jonathan Skov',
    email: 'kasper@hviid.com',
    image: user5,
  },
]

export const sampleProjectsTodos = [
  {
    id: 1,
    name: 'No project'
  },
  {
    id: 2,
    name: 'Project one'
  },
  {
    id: 3,
    name: 'Project two'
  },
  {
    id: 4,
    name: 'Project three'
  }
]

export const sampleTodos = [
  {
    id: 1,
    done: false,
    title: 'Confirm bill payment',
    members : [
      
      {
        id: 1,
        icon: avatar1,
      },
      {
        id: 2,
        icon: avatar2,
      },
      {
        id: 3,
        icon: avatar3,
      }
    ],
  },
  {
    id: 2,
    done: true,
    title: 'Schedule a call with Oscar',
  },
  {
    id: 3,
    done: false,
    title: `Review last month's report`,
    members : [
      {
        id: 1,
        icon: avatar1,
      },
      {
        id: 2,
        icon: avatar2,
      }
    ],
    duedate: {
      date: '12 June',
      time: '08:00'
    },
  },
  {
    id: 4,
    done: false,
    title: 'Prepare for a product presentation',
    subtask : [
      {
        id: 14,
        done: true,
        title: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 24,
        done: false,
        title: 'Lorem ipsum dolor sit'
      },
      {
        id: 34,
        done: false,
        title: 'Lorem ipsum dolor sit amet consecteur dolor'
      }
    ],
    duedate: {
      date: '12 June',
      time: '08:00'
    },
  },
  {
    id: 5,
    done: false,
    title: 'Prepare for a product presentation',
    subtask : [
      {
        id: 18,
        done: true,
        title: 'Lorem ipsum dolor sit amet1',
        subtask : [
          {
            id: 15,
            done: true,
            title: 'Lorem ipsum dolor sit amet2ss',
            subtask : [
              {
                id: 125,
                done: true,
                title: 'Lorem ipsum dolor sit amet2',
              },
              {
                id: 215,
                done: false,
                title: 'Lorem ipsum dolor sit3',
              },
              {
                id: 335,
                done: false,
                title: 'Lorem ipsum dolor sit amet consecteur dolor4'
              }
            ],
          },
          {
            id: 25,
            done: false,
            title: 'Lorem ipsum dolor sit3',
          },
          {
            id: 35,
            done: false,
            title: 'Lorem ipsum dolor sit amet consecteur dolor4'
          }
        ],
      },
      {
        id: 29,
        done: false,
        title: 'Lorem ipsum dolor sit5',
        subtask : [
          {
            id: 16,
            done: true,
            title: 'Lorem ipsum dolor sit amet6'
          },
          {
            id: 26,
            done: false,
            title: 'Lorem ipsum dolor sit7'
          },
          {
            id: 36,
            done: false,
            title: 'Lorem ipsum dolor sit amet consecteur dolor8'
          }
        ],
      },
      {
        id: 37,
        done: false,
        title: 'Lorem ipsum dolor sit amet consecteur dolor'
      }
    ],
    duedate: {
      date: '12 June',
      time: '08:00'
    },
  },
]

export const sampleColors = [
  {
    id: 1,
    name: 'Blue',
    value: '#3878B9',
  },
  {
    id: 2,
    name: 'Purple',
    value: '#8A6BCD',
  },
  {
    id: 3,
    name: 'Burgundy',
    value: '#B63D5D',
  },
  {
    id: 4,
    name: 'Red',
    value: '#FD5162',
  },
  {
    id: 5,
    name: 'Orange',
    value: '#FF9A27',
  },
  {
    id: 6,
    name: 'Yellow',
    value: '#E0B974',
  },
  {
    id: 7,
    name: 'Green',
    value: '#66CFA9',
  },
]

export const sampleRegisterCodes = [
  {
    id:'GKDwaTf7',
    code: 'GKDwaTf7',
    used: false,
  },
  {
    id:'G3qAka9E',
    code: 'G3qAka9E',
    used: false,
  },
  {
    id:'x4zZvoxz',
    code: 'x4zZvoxz',
    used: false,
  },
  {
    id:'KXACIUj5',
    code: 'KXACIUj5',
    used: false,
  },
  {
    id:'K0u7VgOV',
    code: 'K0u7VgOV',
    used: false,
  },  
  {
    id:'IAvmvx3C',
    code: 'IAvmvx3C',
    used: false,
  },
  {
    id:'0MJ5VSnG',
    code: '0MJ5VSnG',
    used: false,
  },
  {
    id:'EZOrth1C',
    code: 'EZOrth1C',
    used: false,
  },
  {
    id:'5VmtevGj',
    code: '5VmtevGj',
    used: false,
  },
  {
    id:'R0Pzie7A',
    code: 'R0Pzie7A',
    used: false,
  },
  {
    id:'4YvyTyUM',
    code: '4YvyTyUM',
    used: false,
  },
  {
    id:'Om0SuCFy',
    code: 'Om0SuCFy',
    used: false,
  },
  {
    id:'PsFzX2TE',
    code: 'PsFzX2TE',
    used: false,
  },
  {
    id:'Xosil3Ld',
    code: 'Xosil3Ld',
    used: false,
  },
  {
    id:'2G0dPFNC',
    code: '2G0dPFNC',
    used: false,
  },
  {
    id:'0Y6uY3Y3',
    code: '0Y6uY3Y3',
    used: false,
  },
  {
    id:'AFn7q6Oq',
    code: 'AFn7q6Oq',
    used: false,
  },
  {
    id:'RoGR7dpC',
    code: 'RoGR7dpC',
    used: false,
  },
  {
    id:'TCsQ3rz9',
    code: 'TCsQ3rz9',
    used: false,
  },
  {
    id:'H4g7nfS6',
    code: 'H4g7nfS6',
    used: false,
  },
  {
    id:'x5XcZXph',
    code: 'x5XcZXph',
    used: false,
  },
  {
    id:'rTp0h3gh',
    code: 'rTp0h3gh',
    used: false,
  },
  {
    id:'m7JCALVf',
    code: 'm7JCALVf',
    used: false,
  },
  {
    id:'57g33GVx',
    code: '57g33GVx',
    used: false,
  },
  {
    id:'gsDjgFq2',
    code: 'gsDjgFq2',
    used: false,
  },
  {
    id:'4Dgfn0Ky',
    code: '4Dgfn0Ky',
    used: false,
  },
  {
    id:'Z4I7kG7X',
    code: 'Z4I7kG7X',
    used: false,
  },
  {
    id:'njMN6SsA',
    code: 'njMN6SsA',
    used: false,
  },
  {
    id:'IVeUbBu1',
    code: 'IVeUbBu1',
    used: false,
  },
  {
    id:'C3u6YsLS',
    code: 'C3u6YsLS',
    used: false,
  },
  {
    id:'r3oUnAdx',
    code: 'r3oUnAdx',
    used: false,
  },
  {
    id:'GFyzVt4x',
    code: 'GFyzVt4x',
    used: false,
  },
  {
    id:'3Q8cQzTD',
    code: '3Q8cQzTD',
    used: false,
  },
  {
    id:'OH0y5LxC',
    code: 'OH0y5LxC',
    used: false,
  },
  {
    id:'OluH6QmE',
    code: 'OluH6QmE',
    used: false,
  },
  {
    id:'yf97xP7i',
    code: 'yf97xP7i',
    used: false,
  },
  {
    id:'Xb79RZb8',
    code: 'Xb79RZb8',
    used: false,
  },
  {
    id:'YWs6uXlq',
    code: 'YWs6uXlq',
    used: false,
  },
  {
    id:'9uYr8HKA',
    code: '9uYr8HKA',
    used: false,
  },
  {
    id:'T6HOXNcU',
    code: 'T6HOXNcU',
    used: false,
  },
  {
    id:'25fleZBx',
    code: '25fleZBx',
    used: false,
  },
  {
    id:'R0F3NDao',
    code: 'R0F3NDao',
    used: false,
  },
  {
    id:'gjLf5G4j',
    code: 'gjLf5G4j',
    used: false,
  },
  {
    id:'1ZVwz9JL',
    code: '1ZVwz9JL',
    used: false,
  },
  {
    id:'U93CMctm',
    code: 'U93CMctm',
    used: false,
  },
  {
    id:'aLu7g4ZL',
    code: 'aLu7g4ZL',
    used: false,
  },
  {
    id:'yA4ZILL3',
    code: 'yA4ZILL3',
    used: false,
  },
  {
    id:'Piy6EbB8',
    code: 'Piy6EbB8',
    used: false,
  },
  {
    id:'Ihb591lJ',
    code: 'Ihb591lJ',
    used: false,
  },
  {
    id:'gJ04ofjL',
    code: 'gJ04ofjL',
    used: false,
  },
  {
    id:'5W91AW',
    code: '5W91AW',
    used: false,
  },
  {
    id:'Q8SRSU',
    code: 'Q8SRSU',
    used: false,
  },
  {
    id:'2ARPKG',
    code: '2ARPKG',
    used: false,
  },
  {
    id:'5W3ZLW',
    code: '5W3ZLW',
    used: false,
  },
  {
    id:'LAZIAD',
    code: 'LAZIAD',
    used: false,
  }
]

export const UpcomingTodayMeetings = [
  {
    id: 1,
    name: 'Lorem Ipsum',
    date: '18/05/24',
    time_from: '15:00',
    time_to: '16:00',
    description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    date: '18/05/24',
    time_from: '16:00',
    time_to: '17:00',
    description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,Pellentesque lobortis, velit eget, est arcu tristique leo,',
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    date: '18/05/24',
    time_from: '17:00',
    time_to: '18:00',
    description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    date: '18/05/24',
    time_from: '15:00',
    time_to: '16:00',
    description: 'Pellentesque lobortis, velit eget, est arcu tristique leo,Pellentesque lobortis, velit eget, est arcu tristique leo,',
  },
  {
    id: 5,
    name: 'Lorem Ipsum',
    date: '18/05/24',
    time_from: '16:00',
    time_to: '17:00',
    description: 'Pellentesque lobortis, velit eget, est arcu tristique leo',
  }
];

export const sampleAccountingTasks = [
  {
    id: 1,
    title: 'Tax at source',
    date: '31 October',
    iconType: 'alert',
  },
  {
    id: 2,
    title: 'Salary transmission',
    date: '31 October',
    iconType: 'alert',
  },
  {
    id: 3,
    title: 'Add a new business year',
    date: '31 October',
    iconType: 'alert',
  },
  {
    id: 4,
    title: 'Check the settings of your new year',
    date: '31 October',
    iconType: 'alert',
  }
]

export const sampleAccountingReports = [
  {
    id: 1,
    title: 'Tax at source',
    date: 'September 2023',
    iconType: 'success',
  },
  {
    id: 2,
    title: 'Salary transmission',
    date: 'September 2023',
    iconType: 'success',
  },
  {
    id: 3,
    title: 'Add a new business year',
    date: 'September 2023',
    iconType: 'success',
  },
  {
    id: 4,
    title: 'Year end transmission tax',
    date: 'September 2023',
    iconType: 'success',
  }
]