import React, { useState } from 'react'

const Sidebar = ({currentChat, setCurrentChat, chat, chat2, chat3}) => {
    const [selectedItem, setSelectedItem] = useState("1");


    const historyData = {
        today: [
          {
            id: "1",
            title: "Test 1",
          },
          {
            id: "2",
            title: "Test 2",
          },
          {
            id: "3",
            title: "Test 3",
          },
          { id: "4", title: "Test 4" },
          { id: "5", title: "Test 5" },
          { id: "6", title: "Test 6" },
          { id: "7", title: "Test 7" },
          { id: "8", title: "Test 8" },
          { id: "9", title: "Test 9" },
          { id: "10", title: "Test 10" },
          { id: "11", title: "Test 11" },
          { id: "12", title: "Test 12" },
          { id: "13", title: "Test 13" },
          { id: "14", title: "Test 14" },
          { id: "15", title: "Test 15" },
          { id: "16", title: "Test 16" },
          { id: "17", title: "Test 17" },
          { id: "18", title: "Test 18" },
          { id: "19", title: "Test 19" },
          { id: "20", title: "Test 20" },
        ],
        yesterday: [
          {
            id: "100",
            title: "Test 100",
          },
          {
            id: "101",
            title: "Test 101",
          },
          {
            id: "102",
            title: "Test 102",
          },
          {
            id: "103",
            title: "Test 103",
          },
        ],
      };
      const handleItemClick = (index) => {
        setSelectedItem(index);
        switch (index) {
          case "1":
            setCurrentChat(chat);
            break;
          case "2":
            setCurrentChat(chat2);
            break;
          case "3":
            setCurrentChat(chat3);
            break;
          // Add more cases as needed
          default:
            setCurrentChat([]);
        }
      };
    
  return (
    <div className="sidebar">
        <div className="header">
          <span>
            <svg width="105" height="40" viewBox="0 0 105 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M71.9468 0.705041C64.5779 2.90106 60.8937 6.44346 60.0933 12.1025C59.9087 13.4079 59.9277 38.8441 60.1132 38.781C60.1899 38.7549 61.5938 38.3427 63.2333 37.8648L66.214 36.996L66.2152 25.8136C66.2163 14.3007 66.2632 12.8114 66.6596 11.6781C67.4195 9.50579 69.4867 7.9431 72.9322 6.9368L74.3534 6.52163V3.25857C74.3534 1.46391 74.3409 -0.00251827 74.3255 3.24694e-06C74.3101 0.00241513 73.2397 0.319687 71.9468 0.705041ZM11.9863 1.91438C10.6988 2.29053 9.28183 2.70537 8.83729 2.83638L8.02913 3.0745L8.02724 14.9922C8.02512 27.9296 8.03359 27.7374 7.4097 28.9525C6.40491 30.9091 4.94667 31.9409 1.6979 32.9942L0.0590786 33.5256L0.0295393 36.7628L0 40L0.531151 39.8496C6.467 38.1685 8.12968 37.378 10.4893 35.1149C12.746 32.9505 13.8556 30.7448 14.2703 27.5994C14.3513 26.9845 14.3799 22.5756 14.3586 13.9606L14.3272 1.23061L11.9863 1.91438ZM38.4603 1.63372C32.3065 2.53303 27.7176 6.22157 26.2273 11.4666L25.92 12.5483V22.2506V31.953L26.2694 32.9134C28.1316 38.0324 33.7969 39.8291 40.1536 37.3164C45.8168 35.078 48.8247 30.7552 48.8265 24.8523L48.8269 23.3428L48.5761 23.4062C48.4381 23.4411 47.097 23.8269 45.5957 24.2634L42.8663 25.0573L42.7253 26.0275C42.2463 29.3246 39.9004 31.5884 36.1751 32.3484C34.0199 32.788 32.6518 32.3999 32.0931 31.19C31.7875 30.5283 31.7747 24.7091 32.0786 24.6203C32.1859 24.589 33.8237 24.1136 35.7181 23.5638C42.933 21.4699 45.5534 19.7352 47.5554 15.7275C51.3491 8.13266 46.4059 0.472512 38.4603 1.63372ZM94.9752 1.60643C89.0321 2.23176 83.8846 6.21663 82.5408 11.2327C82.1183 12.8095 81.8253 16.6594 82.1278 16.6594C82.1734 16.6594 83.52 16.2802 85.1201 15.8168L88.0294 14.9743L88.1604 14.0071C88.7698 9.50535 95.0424 5.80365 98.1932 8.08639C99.0146 8.68158 99.6559 15.1648 98.915 15.3831C98.8019 15.4164 97.33 15.8369 95.644 16.3176C90.0106 17.9237 88.1178 18.8007 85.9112 20.8276C82.2842 24.1589 80.9827 29.9521 82.9559 33.9811C86.7948 41.8194 101.438 38.6047 104.429 29.267C105.02 27.4217 105.025 27.3216 104.987 17.3172L104.952 8.05339L104.604 7.09631C103.238 3.33027 99.3981 1.14115 94.9752 1.60643ZM41.5704 7.85266C43.4781 8.8013 43.1551 12.5289 40.9741 14.7346C39.7222 16.0008 38.5843 16.5255 34.4752 17.7314L31.8836 18.492L31.8854 16.1779C31.8876 13.1305 32.1595 12.0716 33.3171 10.6003C35.1706 8.2447 39.4762 6.81116 41.5704 7.85266ZM99.0685 23.8129C98.9473 28.2274 97.9849 29.9667 94.7854 31.5533C91.1766 33.3428 88.0579 32.6121 88.0691 29.9796C88.0847 26.3005 90.1724 24.1004 94.9752 22.702C95.8029 22.461 97.0569 22.0937 97.7619 21.8858C98.467 21.6778 99.0638 21.5022 99.0881 21.4955C99.1124 21.4887 99.1036 22.5316 99.0685 23.8129Z" fill="#8096A3" />
            </svg>
          </span>
        </div>
        <div className="sidebar-main-content">
        <div className="main-content-section">
        <h2>Today</h2>
        <ul>
          {historyData.today.map((item, index) => (
            <li
              key={item.id}
              className={item.id === selectedItem ? 'selected' : ''}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content-section">
        <h2>Yesterday</h2>
        <ul>
          {historyData.yesterday.map((item, index) => (
            <li
              key={item.id}
              className={item.id === selectedItem ? 'selected' : ''}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
        </div>
        <div className="footer">
        <div className="profile-message-container">
          <img src="https://images.desenio.com/zoom/8701_2.jpg" alt="aa" className="message-image" />
          <div className="message-text">
            <p>Houssem Slimani</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
        </div>
        </div>
      </div>
  )
}

export default Sidebar