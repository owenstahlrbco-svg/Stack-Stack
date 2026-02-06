/**
 * YardCraft - Landscape Design Studio
 * Items catalog with SVG artwork and pricing
 */

const ITEMS_CATALOG = {
  trees: [
    {
      id: 'oak-tree',
      name: 'Oak Tree',
      price: 350,
      width: 140,
      height: 180,
      svg: `<svg viewBox="0 0 140 180" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="120" width="20" height="55" rx="3" fill="#6B4226"/>
        <rect x="62" y="120" width="6" height="55" fill="#7D5233" opacity="0.5"/>
        <ellipse cx="70" cy="75" rx="55" ry="55" fill="#2E7D32"/>
        <ellipse cx="45" cy="60" rx="35" ry="35" fill="#388E3C"/>
        <ellipse cx="90" cy="65" rx="30" ry="30" fill="#388E3C"/>
        <ellipse cx="70" cy="45" rx="30" ry="28" fill="#43A047"/>
        <ellipse cx="55" cy="80" rx="20" ry="15" fill="#4CAF50" opacity="0.6"/>
        <ellipse cx="85" cy="50" rx="15" ry="12" fill="#66BB6A" opacity="0.5"/>
      </svg>`
    },
    {
      id: 'maple-tree',
      name: 'Maple Tree',
      price: 300,
      width: 130,
      height: 170,
      svg: `<svg viewBox="0 0 130 170" xmlns="http://www.w3.org/2000/svg">
        <rect x="55" y="110" width="18" height="55" rx="3" fill="#6B4226"/>
        <rect x="57" y="110" width="5" height="55" fill="#7D5233" opacity="0.5"/>
        <path d="M65 15 C30 40, 10 70, 15 100 C18 115, 35 125, 65 120 C95 125, 112 115, 115 100 C120 70, 100 40, 65 15Z" fill="#C62828"/>
        <path d="M65 25 C40 45, 25 70, 30 95 C32 105, 45 112, 65 108" fill="#D32F2F" opacity="0.7"/>
        <path d="M65 25 C90 45, 105 70, 100 95 C98 105, 85 112, 65 108" fill="#E53935" opacity="0.5"/>
        <ellipse cx="50" cy="70" rx="18" ry="15" fill="#EF5350" opacity="0.4"/>
        <ellipse cx="80" cy="60" rx="15" ry="12" fill="#FF8A65" opacity="0.3"/>
      </svg>`
    },
    {
      id: 'pine-tree',
      name: 'Pine Tree',
      price: 200,
      width: 100,
      height: 190,
      svg: `<svg viewBox="0 0 100 190" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="140" width="16" height="45" rx="2" fill="#5D4037"/>
        <rect x="44" y="140" width="5" height="45" fill="#6D4C41" opacity="0.5"/>
        <path d="M50 10 L15 75 H30 L10 120 H25 L5 155 H95 L75 120 H90 L70 75 H85Z" fill="#1B5E20"/>
        <path d="M50 10 L30 55 H40 L25 90 H35 L20 130 H50Z" fill="#2E7D32" opacity="0.6"/>
        <path d="M50 25 L40 50 H45 L35 80 H42 L30 115 H50Z" fill="#388E3C" opacity="0.4"/>
      </svg>`
    },
    {
      id: 'palm-tree',
      name: 'Palm Tree',
      price: 450,
      width: 140,
      height: 200,
      svg: `<svg viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M65 60 C63 90, 60 140, 62 190 C62 192, 78 192, 78 190 C80 140, 77 90, 75 60Z" fill="#8D6E63"/>
        <path d="M68 60 C66 90, 64 140, 66 190" stroke="#A1887F" stroke-width="3" fill="none" opacity="0.5"/>
        <path d="M70 55 C50 30, 15 25, 2 35" stroke="#2E7D32" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M70 50 C85 20, 120 10, 138 18" stroke="#2E7D32" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M68 58 C45 45, 10 50, 5 65" stroke="#388E3C" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M72 58 C95 45, 130 50, 135 65" stroke="#388E3C" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M70 52 C60 30, 55 10, 70 2" stroke="#43A047" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M70 52 C80 30, 85 10, 70 2" stroke="#4CAF50" stroke-width="5" fill="none" stroke-linecap="round"/>
        <ellipse cx="70" cy="55" rx="8" ry="6" fill="#33691E"/>
      </svg>`
    },
    {
      id: 'cherry-blossom',
      name: 'Cherry Blossom',
      price: 500,
      width: 150,
      height: 175,
      svg: `<svg viewBox="0 0 150 175" xmlns="http://www.w3.org/2000/svg">
        <rect x="65" y="110" width="18" height="60" rx="3" fill="#5D4037"/>
        <path d="M73 110 C55 100, 35 105, 30 100" stroke="#6D4C41" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M73 100 C90 90, 110 95, 115 90" stroke="#6D4C41" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="75" cy="65" rx="55" ry="50" fill="#F8BBD0"/>
        <ellipse cx="50" cy="55" rx="32" ry="30" fill="#F48FB1"/>
        <ellipse cx="100" cy="58" rx="30" ry="28" fill="#F48FB1"/>
        <ellipse cx="75" cy="40" rx="28" ry="25" fill="#F06292"/>
        <circle cx="40" cy="45" r="4" fill="#EC407A"/><circle cx="42" cy="43" r="2" fill="#FCE4EC"/>
        <circle cx="60" cy="35" r="4" fill="#EC407A"/><circle cx="62" cy="33" r="2" fill="#FCE4EC"/>
        <circle cx="90" cy="38" r="4" fill="#EC407A"/><circle cx="92" cy="36" r="2" fill="#FCE4EC"/>
        <circle cx="105" cy="50" r="3.5" fill="#EC407A"/><circle cx="107" cy="48" r="1.8" fill="#FCE4EC"/>
        <circle cx="75" cy="28" r="3.5" fill="#EC407A"/><circle cx="77" cy="26" r="1.8" fill="#FCE4EC"/>
        <circle cx="55" cy="70" r="3" fill="#EC407A"/><circle cx="57" cy="68" r="1.5" fill="#FCE4EC"/>
        <circle cx="95" cy="72" r="3" fill="#EC407A"/><circle cx="97" cy="70" r="1.5" fill="#FCE4EC"/>
      </svg>`
    },
    {
      id: 'birch-tree',
      name: 'Birch Tree',
      price: 275,
      width: 110,
      height: 195,
      svg: `<svg viewBox="0 0 110 195" xmlns="http://www.w3.org/2000/svg">
        <rect x="47" y="80" width="16" height="110" rx="2" fill="#F5F5F5"/>
        <rect x="49" y="90" width="4" height="8" rx="1" fill="#424242" opacity="0.5"/>
        <rect x="53" y="110" width="5" height="6" rx="1" fill="#424242" opacity="0.4"/>
        <rect x="48" y="135" width="6" height="7" rx="1" fill="#424242" opacity="0.5"/>
        <rect x="54" y="155" width="4" height="5" rx="1" fill="#424242" opacity="0.3"/>
        <ellipse cx="55" cy="55" rx="42" ry="48" fill="#8BC34A"/>
        <ellipse cx="38" cy="42" rx="25" ry="28" fill="#9CCC65"/>
        <ellipse cx="72" cy="48" rx="22" ry="25" fill="#9CCC65"/>
        <ellipse cx="55" cy="30" rx="20" ry="22" fill="#AED581"/>
        <ellipse cx="45" cy="65" rx="15" ry="12" fill="#C5E1A5" opacity="0.5"/>
      </svg>`
    }
  ],
  flowers: [
    {
      id: 'rose-bush',
      name: 'Rose Bush',
      price: 45,
      width: 70,
      height: 65,
      svg: `<svg viewBox="0 0 70 65" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="35" cy="45" rx="30" ry="18" fill="#2E7D32"/>
        <ellipse cx="25" cy="42" rx="18" ry="14" fill="#388E3C"/>
        <ellipse cx="45" cy="42" rx="18" ry="14" fill="#388E3C"/>
        <circle cx="20" cy="30" r="8" fill="#E53935"/><circle cx="20" cy="30" r="5" fill="#C62828"/><circle cx="20" cy="30" r="2.5" fill="#EF5350"/>
        <circle cx="38" cy="25" r="9" fill="#E53935"/><circle cx="38" cy="25" r="6" fill="#C62828"/><circle cx="38" cy="25" r="3" fill="#EF5350"/>
        <circle cx="52" cy="32" r="7" fill="#E53935"/><circle cx="52" cy="32" r="4.5" fill="#C62828"/><circle cx="52" cy="32" r="2" fill="#EF5350"/>
        <circle cx="30" cy="20" r="6" fill="#E53935"/><circle cx="30" cy="20" r="3.5" fill="#C62828"/><circle cx="30" cy="20" r="1.8" fill="#EF5350"/>
      </svg>`
    },
    {
      id: 'lavender',
      name: 'Lavender',
      price: 25,
      width: 55,
      height: 70,
      svg: `<svg viewBox="0 0 55 70" xmlns="http://www.w3.org/2000/svg">
        <line x1="15" y1="50" x2="15" y2="25" stroke="#4CAF50" stroke-width="2"/>
        <line x1="27" y1="50" x2="27" y2="15" stroke="#4CAF50" stroke-width="2"/>
        <line x1="40" y1="50" x2="40" y2="22" stroke="#4CAF50" stroke-width="2"/>
        <ellipse cx="27" cy="55" rx="25" ry="12" fill="#4CAF50"/>
        <circle cx="15" cy="25" r="3" fill="#7B1FA2"/><circle cx="15" cy="20" r="2.8" fill="#8E24AA"/><circle cx="15" cy="15" r="2.5" fill="#9C27B0"/><circle cx="15" cy="11" r="2" fill="#AB47BC"/>
        <circle cx="27" cy="15" r="3" fill="#7B1FA2"/><circle cx="27" cy="10" r="2.8" fill="#8E24AA"/><circle cx="27" cy="5" r="2.5" fill="#9C27B0"/><circle cx="27" cy="1" r="2" fill="#AB47BC"/>
        <circle cx="40" cy="22" r="3" fill="#7B1FA2"/><circle cx="40" cy="17" r="2.8" fill="#8E24AA"/><circle cx="40" cy="13" r="2.5" fill="#9C27B0"/><circle cx="40" cy="9" r="2" fill="#AB47BC"/>
      </svg>`
    },
    {
      id: 'sunflower-patch',
      name: 'Sunflower Patch',
      price: 35,
      width: 80,
      height: 85,
      svg: `<svg viewBox="0 0 80 85" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="72" rx="35" ry="12" fill="#388E3C"/>
        <line x1="20" y1="70" x2="20" y2="30" stroke="#4CAF50" stroke-width="3"/>
        <line x1="42" y1="70" x2="42" y2="18" stroke="#4CAF50" stroke-width="3"/>
        <line x1="62" y1="70" x2="62" y2="28" stroke="#4CAF50" stroke-width="3"/>
        <g transform="translate(20,25)"><circle r="10" fill="#F9A825"/><circle r="8" fill="#F57F17"/><circle r="5" fill="#5D4037"/>
          <ellipse cx="-8" cy="0" rx="5" ry="3" fill="#FDD835" transform="rotate(0)"/><ellipse cx="8" cy="0" rx="5" ry="3" fill="#FDD835"/><ellipse cx="0" cy="-8" rx="3" ry="5" fill="#FDD835"/><ellipse cx="0" cy="8" rx="3" ry="5" fill="#FDD835"/><ellipse cx="-6" cy="-6" rx="5" ry="3" fill="#FFEE58" transform="rotate(45)"/><ellipse cx="6" cy="6" rx="5" ry="3" fill="#FFEE58" transform="rotate(45)"/>
        </g>
        <g transform="translate(42,13)"><circle r="11" fill="#F9A825"/><circle r="9" fill="#F57F17"/><circle r="5.5" fill="#5D4037"/>
          <ellipse cx="-9" cy="0" rx="5.5" ry="3.2" fill="#FDD835"/><ellipse cx="9" cy="0" rx="5.5" ry="3.2" fill="#FDD835"/><ellipse cx="0" cy="-9" rx="3.2" ry="5.5" fill="#FDD835"/><ellipse cx="0" cy="9" rx="3.2" ry="5.5" fill="#FDD835"/>
        </g>
        <g transform="translate(62,23)"><circle r="9" fill="#F9A825"/><circle r="7" fill="#F57F17"/><circle r="4.5" fill="#5D4037"/>
          <ellipse cx="-7" cy="0" rx="4.5" ry="2.8" fill="#FDD835"/><ellipse cx="7" cy="0" rx="4.5" ry="2.8" fill="#FDD835"/><ellipse cx="0" cy="-7" rx="2.8" ry="4.5" fill="#FDD835"/><ellipse cx="0" cy="7" rx="2.8" ry="4.5" fill="#FDD835"/>
        </g>
      </svg>`
    },
    {
      id: 'tulip-bed',
      name: 'Tulip Bed',
      price: 40,
      width: 85,
      height: 55,
      svg: `<svg viewBox="0 0 85 55" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="42" cy="45" rx="38" ry="10" fill="#388E3C"/>
        <g transform="translate(15,20)"><line x1="0" y1="20" x2="0" y2="5" stroke="#4CAF50" stroke-width="2"/><path d="M0 5 C-5 0, -6 -8, 0 -10 C6 -8, 5 0, 0 5Z" fill="#E53935"/></g>
        <g transform="translate(28,15)"><line x1="0" y1="22" x2="0" y2="5" stroke="#4CAF50" stroke-width="2"/><path d="M0 5 C-5 0, -6 -8, 0 -10 C6 -8, 5 0, 0 5Z" fill="#FDD835"/></g>
        <g transform="translate(42,18)"><line x1="0" y1="20" x2="0" y2="5" stroke="#4CAF50" stroke-width="2"/><path d="M0 5 C-5 0, -6 -8, 0 -10 C6 -8, 5 0, 0 5Z" fill="#AB47BC"/></g>
        <g transform="translate(55,14)"><line x1="0" y1="22" x2="0" y2="5" stroke="#4CAF50" stroke-width="2"/><path d="M0 5 C-5 0, -6 -8, 0 -10 C6 -8, 5 0, 0 5Z" fill="#F06292"/></g>
        <g transform="translate(68,20)"><line x1="0" y1="18" x2="0" y2="5" stroke="#4CAF50" stroke-width="2"/><path d="M0 5 C-5 0, -6 -8, 0 -10 C6 -8, 5 0, 0 5Z" fill="#FF7043"/></g>
      </svg>`
    },
    {
      id: 'hydrangea',
      name: 'Hydrangea',
      price: 55,
      width: 75,
      height: 70,
      svg: `<svg viewBox="0 0 75 70" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="37" cy="55" rx="32" ry="14" fill="#2E7D32"/>
        <rect x="34" y="45" width="6" height="18" rx="2" fill="#4CAF50"/>
        <circle cx="37" cy="30" r="22" fill="#64B5F6"/>
        <circle cx="25" cy="25" r="5" fill="#42A5F5"/><circle cx="25" cy="25" r="2.5" fill="#90CAF9"/>
        <circle cx="37" cy="18" r="5.5" fill="#42A5F5"/><circle cx="37" cy="18" r="2.8" fill="#90CAF9"/>
        <circle cx="48" cy="23" r="5" fill="#42A5F5"/><circle cx="48" cy="23" r="2.5" fill="#90CAF9"/>
        <circle cx="30" cy="35" r="5" fill="#1E88E5"/><circle cx="30" cy="35" r="2.5" fill="#90CAF9"/>
        <circle cx="43" cy="35" r="5" fill="#1E88E5"/><circle cx="43" cy="35" r="2.5" fill="#90CAF9"/>
        <circle cx="37" cy="28" r="4.5" fill="#1565C0"/><circle cx="37" cy="28" r="2.2" fill="#BBDEFB"/>
      </svg>`
    },
    {
      id: 'daisy-cluster',
      name: 'Daisy Cluster',
      price: 20,
      width: 60,
      height: 50,
      svg: `<svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="42" rx="28" ry="8" fill="#388E3C"/>
        <g transform="translate(18,22)">
          <ellipse cx="-6" cy="0" rx="4" ry="2" fill="white"/><ellipse cx="6" cy="0" rx="4" ry="2" fill="white"/><ellipse cx="0" cy="-6" rx="2" ry="4" fill="white"/><ellipse cx="0" cy="6" rx="2" ry="4" fill="white"/><circle r="3" fill="#FDD835"/>
        </g>
        <g transform="translate(35,16)">
          <ellipse cx="-7" cy="0" rx="4.5" ry="2.2" fill="white"/><ellipse cx="7" cy="0" rx="4.5" ry="2.2" fill="white"/><ellipse cx="0" cy="-7" rx="2.2" ry="4.5" fill="white"/><ellipse cx="0" cy="7" rx="2.2" ry="4.5" fill="white"/><circle r="3.5" fill="#FDD835"/>
        </g>
        <g transform="translate(45,28)">
          <ellipse cx="-5" cy="0" rx="3.5" ry="1.8" fill="white"/><ellipse cx="5" cy="0" rx="3.5" ry="1.8" fill="white"/><ellipse cx="0" cy="-5" rx="1.8" ry="3.5" fill="white"/><ellipse cx="0" cy="5" rx="1.8" ry="3.5" fill="white"/><circle r="2.5" fill="#FDD835"/>
        </g>
      </svg>`
    },
    {
      id: 'peony-bush',
      name: 'Peony Bush',
      price: 65,
      width: 70,
      height: 65,
      svg: `<svg viewBox="0 0 70 65" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="35" cy="50" rx="30" ry="14" fill="#2E7D32"/>
        <ellipse cx="25" cy="45" rx="18" ry="12" fill="#388E3C"/>
        <ellipse cx="45" cy="45" rx="18" ry="12" fill="#388E3C"/>
        <circle cx="22" cy="30" r="10" fill="#F48FB1"/><circle cx="22" cy="30" r="7" fill="#F06292"/><circle cx="22" cy="30" r="4" fill="#EC407A"/><circle cx="22" cy="30" r="2" fill="#FCE4EC"/>
        <circle cx="40" cy="24" r="12" fill="#F48FB1"/><circle cx="40" cy="24" r="8.5" fill="#F06292"/><circle cx="40" cy="24" r="5" fill="#EC407A"/><circle cx="40" cy="24" r="2.5" fill="#FCE4EC"/>
        <circle cx="54" cy="33" r="9" fill="#F48FB1"/><circle cx="54" cy="33" r="6" fill="#F06292"/><circle cx="54" cy="33" r="3.5" fill="#EC407A"/><circle cx="54" cy="33" r="1.8" fill="#FCE4EC"/>
      </svg>`
    },
    {
      id: 'ornamental-grass',
      name: 'Ornamental Grass',
      price: 30,
      width: 65,
      height: 70,
      svg: `<svg viewBox="0 0 65 70" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="62" rx="25" ry="8" fill="#558B2F"/>
        <path d="M32 60 C30 40, 10 20, 5 5" stroke="#7CB342" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C31 38, 18 22, 15 8" stroke="#8BC34A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C32 35, 28 20, 25 5" stroke="#9CCC65" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C33 35, 37 18, 40 3" stroke="#9CCC65" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C34 38, 45 22, 50 8" stroke="#8BC34A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C35 40, 52 20, 60 5" stroke="#7CB342" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C31 45, 22 30, 20 18" stroke="#AED581" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M32 60 C33 45, 42 30, 45 18" stroke="#AED581" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`
    }
  ],
  shrubs: [
    {
      id: 'boxwood',
      name: 'Boxwood Hedge',
      price: 80,
      width: 100,
      height: 55,
      svg: `<svg viewBox="0 0 100 55" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="90" height="38" rx="8" fill="#2E7D32"/>
        <rect x="8" y="12" width="84" height="34" rx="6" fill="#388E3C"/>
        <ellipse cx="25" cy="25" rx="15" ry="12" fill="#43A047" opacity="0.6"/>
        <ellipse cx="50" cy="22" rx="16" ry="13" fill="#43A047" opacity="0.5"/>
        <ellipse cx="75" cy="25" rx="15" ry="12" fill="#43A047" opacity="0.6"/>
        <ellipse cx="37" cy="18" rx="10" ry="8" fill="#4CAF50" opacity="0.4"/>
        <ellipse cx="63" cy="18" rx="10" ry="8" fill="#4CAF50" opacity="0.4"/>
      </svg>`
    },
    {
      id: 'holly-bush',
      name: 'Holly Bush',
      price: 60,
      width: 70,
      height: 75,
      svg: `<svg viewBox="0 0 70 75" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="55" width="10" height="15" rx="2" fill="#5D4037"/>
        <ellipse cx="35" cy="38" rx="30" ry="30" fill="#1B5E20"/>
        <ellipse cx="25" cy="30" rx="18" ry="18" fill="#2E7D32"/>
        <ellipse cx="45" cy="32" rx="17" ry="17" fill="#2E7D32"/>
        <ellipse cx="35" cy="22" rx="15" ry="14" fill="#388E3C"/>
        <circle cx="20" cy="28" r="3" fill="#C62828"/><circle cx="20" cy="28" r="1.5" fill="#E53935"/>
        <circle cx="40" cy="20" r="3" fill="#C62828"/><circle cx="40" cy="20" r="1.5" fill="#E53935"/>
        <circle cx="50" cy="35" r="2.5" fill="#C62828"/><circle cx="50" cy="35" r="1.2" fill="#E53935"/>
        <circle cx="28" cy="42" r="2.5" fill="#C62828"/><circle cx="28" cy="42" r="1.2" fill="#E53935"/>
        <circle cx="35" cy="32" r="2" fill="#C62828"/><circle cx="35" cy="32" r="1" fill="#E53935"/>
      </svg>`
    },
    {
      id: 'azalea',
      name: 'Azalea',
      price: 55,
      width: 75,
      height: 60,
      svg: `<svg viewBox="0 0 75 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="37" cy="45" rx="33" ry="14" fill="#2E7D32"/>
        <ellipse cx="25" cy="40" rx="20" ry="16" fill="#388E3C"/>
        <ellipse cx="50" cy="40" rx="20" ry="16" fill="#388E3C"/>
        <circle cx="15" cy="30" r="7" fill="#CE93D8"/><circle cx="15" cy="30" r="4" fill="#BA68C8"/><circle cx="15" cy="30" r="2" fill="#AB47BC"/>
        <circle cx="30" cy="25" r="8" fill="#CE93D8"/><circle cx="30" cy="25" r="5" fill="#BA68C8"/><circle cx="30" cy="25" r="2.5" fill="#AB47BC"/>
        <circle cx="48" cy="27" r="7.5" fill="#CE93D8"/><circle cx="48" cy="27" r="4.5" fill="#BA68C8"/><circle cx="48" cy="27" r="2.2" fill="#AB47BC"/>
        <circle cx="62" cy="32" r="6.5" fill="#CE93D8"/><circle cx="62" cy="32" r="3.8" fill="#BA68C8"/><circle cx="62" cy="32" r="1.8" fill="#AB47BC"/>
        <circle cx="38" cy="20" r="6" fill="#CE93D8"/><circle cx="38" cy="20" r="3.5" fill="#BA68C8"/><circle cx="38" cy="20" r="1.8" fill="#AB47BC"/>
      </svg>`
    },
    {
      id: 'juniper',
      name: 'Juniper',
      price: 45,
      width: 50,
      height: 90,
      svg: `<svg viewBox="0 0 50 90" xmlns="http://www.w3.org/2000/svg">
        <rect x="21" y="70" width="8" height="16" rx="2" fill="#5D4037"/>
        <path d="M25 5 C15 20, 8 40, 10 60 C11 68, 18 74, 25 72 C32 74, 39 68, 40 60 C42 40, 35 20, 25 5Z" fill="#1B5E20"/>
        <path d="M25 10 C18 25, 13 42, 15 58 C16 65, 20 70, 25 68" fill="#2E7D32" opacity="0.7"/>
        <path d="M25 15 C20 28, 16 45, 18 55" fill="none" stroke="#388E3C" stroke-width="3" opacity="0.5"/>
        <path d="M25 15 C30 28, 34 45, 32 55" fill="none" stroke="#388E3C" stroke-width="3" opacity="0.5"/>
      </svg>`
    },
    {
      id: 'butterfly-bush',
      name: 'Butterfly Bush',
      price: 40,
      width: 80,
      height: 80,
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="65" rx="35" ry="14" fill="#2E7D32"/>
        <path d="M40 68 C35 50, 15 40, 10 25" stroke="#4CAF50" stroke-width="2.5" fill="none"/>
        <path d="M40 68 C38 45, 30 35, 25 20" stroke="#4CAF50" stroke-width="2.5" fill="none"/>
        <path d="M40 68 C42 45, 50 35, 55 20" stroke="#4CAF50" stroke-width="2.5" fill="none"/>
        <path d="M40 68 C45 50, 65 40, 70 25" stroke="#4CAF50" stroke-width="2.5" fill="none"/>
        <ellipse cx="10" cy="22" rx="7" ry="10" fill="#7B1FA2"/><ellipse cx="10" cy="18" rx="4" ry="5" fill="#9C27B0"/>
        <ellipse cx="25" cy="17" rx="7" ry="10" fill="#7B1FA2"/><ellipse cx="25" cy="13" rx="4" ry="5" fill="#9C27B0"/>
        <ellipse cx="55" cy="17" rx="7" ry="10" fill="#7B1FA2"/><ellipse cx="55" cy="13" rx="4" ry="5" fill="#9C27B0"/>
        <ellipse cx="70" cy="22" rx="7" ry="10" fill="#7B1FA2"/><ellipse cx="70" cy="18" rx="4" ry="5" fill="#9C27B0"/>
        <ellipse cx="40" cy="15" rx="6" ry="9" fill="#8E24AA"/><ellipse cx="40" cy="11" rx="3.5" ry="4.5" fill="#AB47BC"/>
      </svg>`
    }
  ],
  walls: [
    {
      id: 'brick-wall',
      name: 'Brick Wall Section',
      price: 150,
      width: 160,
      height: 70,
      svg: `<svg viewBox="0 0 160 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="156" height="60" rx="2" fill="#8D6E63"/>
        <g fill="#A1887F" stroke="#795548" stroke-width="0.5">
          <rect x="4" y="7" width="24" height="12" rx="1"/><rect x="30" y="7" width="24" height="12" rx="1"/><rect x="56" y="7" width="24" height="12" rx="1"/><rect x="82" y="7" width="24" height="12" rx="1"/><rect x="108" y="7" width="24" height="12" rx="1"/><rect x="134" y="7" width="22" height="12" rx="1"/>
          <rect x="16" y="21" width="24" height="12" rx="1"/><rect x="42" y="21" width="24" height="12" rx="1"/><rect x="68" y="21" width="24" height="12" rx="1"/><rect x="94" y="21" width="24" height="12" rx="1"/><rect x="120" y="21" width="24" height="12" rx="1"/><rect x="4" y="21" width="10" height="12" rx="1"/><rect x="146" y="21" width="10" height="12" rx="1"/>
          <rect x="4" y="35" width="24" height="12" rx="1"/><rect x="30" y="35" width="24" height="12" rx="1"/><rect x="56" y="35" width="24" height="12" rx="1"/><rect x="82" y="35" width="24" height="12" rx="1"/><rect x="108" y="35" width="24" height="12" rx="1"/><rect x="134" y="35" width="22" height="12" rx="1"/>
          <rect x="16" y="49" width="24" height="12" rx="1"/><rect x="42" y="49" width="24" height="12" rx="1"/><rect x="68" y="49" width="24" height="12" rx="1"/><rect x="94" y="49" width="24" height="12" rx="1"/><rect x="120" y="49" width="24" height="12" rx="1"/><rect x="4" y="49" width="10" height="12" rx="1"/><rect x="146" y="49" width="10" height="12" rx="1"/>
        </g>
      </svg>`
    },
    {
      id: 'stone-wall',
      name: 'Stone Wall',
      price: 200,
      width: 160,
      height: 65,
      svg: `<svg viewBox="0 0 160 65" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="156" height="55" rx="3" fill="#78909C"/>
        <ellipse cx="20" cy="18" rx="14" ry="9" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="50" cy="15" rx="12" ry="10" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="80" cy="17" rx="16" ry="9" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="115" cy="16" rx="14" ry="10" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="145" cy="18" rx="11" ry="9" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="15" cy="35" rx="11" ry="8" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="38" cy="33" rx="13" ry="9" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="65" cy="34" rx="15" ry="8" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="95" cy="35" rx="12" ry="9" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="125" cy="33" rx="16" ry="8" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="150" cy="35" rx="8" ry="9" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="25" cy="50" rx="16" ry="8" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="58" cy="50" rx="13" ry="7" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="90" cy="50" rx="15" ry="8" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="120" cy="51" rx="12" ry="7" fill="#B0BEC5" stroke="#607D8B" stroke-width="0.8"/>
        <ellipse cx="148" cy="50" rx="10" ry="8" fill="#90A4AE" stroke="#607D8B" stroke-width="0.8"/>
      </svg>`
    },
    {
      id: 'retaining-wall',
      name: 'Retaining Wall',
      price: 250,
      width: 170,
      height: 80,
      svg: `<svg viewBox="0 0 170 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 75 L5 20 L165 10 L165 75Z" fill="#8D6E63"/>
        <path d="M5 20 L165 10 L165 18 L5 28Z" fill="#A1887F"/>
        <g fill="#BCAAA4" stroke="#795548" stroke-width="0.6">
          <rect x="7" y="28" width="30" height="14" rx="1" transform="skewY(-0.5)"/>
          <rect x="39" y="27" width="28" height="14" rx="1" transform="skewY(-0.5)"/>
          <rect x="69" y="26" width="32" height="14" rx="1" transform="skewY(-0.5)"/>
          <rect x="103" y="25" width="28" height="14" rx="1" transform="skewY(-0.5)"/>
          <rect x="133" y="24" width="30" height="14" rx="1" transform="skewY(-0.5)"/>
          <rect x="20" y="44" width="28" height="14" rx="1"/><rect x="50" y="43" width="32" height="14" rx="1"/><rect x="84" y="42" width="28" height="14" rx="1"/><rect x="114" y="41" width="30" height="14" rx="1"/><rect x="7" y="44" width="11" height="14" rx="1"/><rect x="146" y="41" width="17" height="14" rx="1"/>
          <rect x="7" y="60" width="30" height="13" rx="1"/><rect x="39" y="60" width="28" height="13" rx="1"/><rect x="69" y="59" width="32" height="13" rx="1"/><rect x="103" y="58" width="28" height="13" rx="1"/><rect x="133" y="57" width="30" height="13" rx="1"/>
        </g>
      </svg>`
    },
    {
      id: 'picket-fence',
      name: 'White Picket Fence',
      price: 120,
      width: 160,
      height: 70,
      svg: `<svg viewBox="0 0 160 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="22" width="152" height="5" rx="1" fill="#ECEFF1" stroke="#CFD8DC" stroke-width="0.5"/>
        <rect x="4" y="45" width="152" height="5" rx="1" fill="#ECEFF1" stroke="#CFD8DC" stroke-width="0.5"/>
        <g fill="#F5F5F5" stroke="#CFD8DC" stroke-width="0.8">
          <path d="M8 60 L8 10 L14 5 L20 10 L20 60Z"/><path d="M26 60 L26 10 L32 5 L38 10 L38 60Z"/>
          <path d="M44 60 L44 10 L50 5 L56 10 L56 60Z"/><path d="M62 60 L62 10 L68 5 L74 10 L74 60Z"/>
          <path d="M80 60 L80 10 L86 5 L92 10 L92 60Z"/><path d="M98 60 L98 10 L104 5 L110 10 L110 60Z"/>
          <path d="M116 60 L116 10 L122 5 L128 10 L128 60Z"/><path d="M134 60 L134 10 L140 5 L146 10 L146 60Z"/>
        </g>
      </svg>`
    },
    {
      id: 'gabion-wall',
      name: 'Gabion Wall',
      price: 180,
      width: 140,
      height: 70,
      svg: `<svg viewBox="0 0 140 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="134" height="64" rx="2" fill="#9E9E9E" stroke="#757575" stroke-width="2"/>
        <line x1="3" y1="35" x2="137" y2="35" stroke="#757575" stroke-width="1.5"/>
        <line x1="47" y1="3" x2="47" y2="67" stroke="#757575" stroke-width="1.5"/>
        <line x1="93" y1="3" x2="93" y2="67" stroke="#757575" stroke-width="1.5"/>
        <g fill="none" stroke="#BDBDBD" stroke-width="0.8" opacity="0.6">
          <circle cx="15" cy="12" r="5"/><circle cx="28" cy="15" r="6"/><circle cx="38" cy="10" r="4"/>
          <circle cx="12" cy="24" r="5.5"/><circle cx="25" cy="26" r="4"/><circle cx="40" cy="22" r="5"/>
          <circle cx="58" cy="12" r="5.5"/><circle cx="72" cy="14" r="5"/><circle cx="84" cy="10" r="4.5"/>
          <circle cx="55" cy="24" r="4.5"/><circle cx="68" cy="26" r="5.5"/><circle cx="82" cy="23" r="4"/>
          <circle cx="104" cy="11" r="5"/><circle cx="118" cy="14" r="5.5"/><circle cx="130" cy="10" r="4"/>
          <circle cx="100" cy="24" r="5.5"/><circle cx="115" cy="26" r="4.5"/><circle cx="128" cy="22" r="5"/>
          <circle cx="15" cy="44" r="5"/><circle cx="28" cy="46" r="5.5"/><circle cx="38" cy="42" r="4.5"/>
          <circle cx="12" cy="57" r="5.5"/><circle cx="25" cy="58" r="4"/><circle cx="40" cy="55" r="5"/>
          <circle cx="58" cy="44" r="5.5"/><circle cx="72" cy="46" r="4.5"/><circle cx="84" cy="42" r="5"/>
          <circle cx="55" cy="57" r="4.5"/><circle cx="68" cy="58" r="5.5"/><circle cx="82" cy="55" r="4"/>
          <circle cx="104" cy="43" r="5"/><circle cx="118" cy="46" r="5.5"/><circle cx="130" cy="42" r="4.5"/>
          <circle cx="100" cy="57" r="5.5"/><circle cx="115" cy="58" r="4.5"/><circle cx="128" cy="55" r="5"/>
        </g>
      </svg>`
    }
  ],
  paths: [
    {
      id: 'stone-path',
      name: 'Stepping Stones',
      price: 85,
      width: 120,
      height: 50,
      svg: `<svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="18" cy="25" rx="14" ry="11" fill="#B0BEC5" stroke="#90A4AE" stroke-width="1"/>
        <ellipse cx="48" cy="22" rx="15" ry="12" fill="#CFD8DC" stroke="#90A4AE" stroke-width="1"/>
        <ellipse cx="78" cy="28" rx="14" ry="10" fill="#B0BEC5" stroke="#90A4AE" stroke-width="1"/>
        <ellipse cx="106" cy="24" rx="12" ry="11" fill="#CFD8DC" stroke="#90A4AE" stroke-width="1"/>
      </svg>`
    },
    {
      id: 'gravel-path',
      name: 'Gravel Pathway',
      price: 95,
      width: 140,
      height: 45,
      svg: `<svg viewBox="0 0 140 45" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="136" height="28" rx="4" fill="#D7CCC8"/>
        <rect x="4" y="10" width="132" height="24" rx="3" fill="#EFEBE9"/>
        <g fill="#BCAAA4" opacity="0.6">
          <circle cx="12" cy="20" r="2"/><circle cx="20" cy="28" r="1.5"/><circle cx="28" cy="18" r="2.2"/><circle cx="35" cy="26" r="1.8"/>
          <circle cx="45" cy="22" r="2"/><circle cx="52" cy="16" r="1.5"/><circle cx="60" cy="28" r="2.2"/><circle cx="68" cy="20" r="1.8"/>
          <circle cx="78" cy="26" r="2"/><circle cx="85" cy="18" r="1.5"/><circle cx="92" cy="24" r="2.2"/><circle cx="100" cy="16" r="1.8"/>
          <circle cx="108" cy="28" r="2"/><circle cx="115" cy="20" r="1.5"/><circle cx="122" cy="26" r="2.2"/><circle cx="130" cy="18" r="1.8"/>
        </g>
      </svg>`
    },
    {
      id: 'flagstone-path',
      name: 'Flagstone Path',
      price: 130,
      width: 130,
      height: 50,
      svg: `<svg viewBox="0 0 130 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10 L25 8 L28 22 L8 24Z" fill="#BCAAA4" stroke="#A1887F" stroke-width="1"/>
        <path d="M28 6 L52 5 L54 20 L30 22Z" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/>
        <path d="M6 26 L30 24 L32 40 L8 42Z" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/>
        <path d="M32 23 L56 22 L58 38 L34 40Z" fill="#BCAAA4" stroke="#A1887F" stroke-width="1"/>
        <path d="M55 4 L78 6 L76 22 L57 20Z" fill="#BCAAA4" stroke="#A1887F" stroke-width="1"/>
        <path d="M59 22 L82 24 L80 42 L57 38Z" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/>
        <path d="M80 5 L105 8 L103 24 L78 22Z" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/>
        <path d="M82 26 L106 28 L104 44 L80 42Z" fill="#BCAAA4" stroke="#A1887F" stroke-width="1"/>
        <path d="M106 7 L125 10 L123 26 L104 24Z" fill="#BCAAA4" stroke="#A1887F" stroke-width="1"/>
        <path d="M107 28 L126 30 L124 44 L105 42Z" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/>
      </svg>`
    },
    {
      id: 'mulch-bed',
      name: 'Mulch Bed',
      price: 40,
      width: 120,
      height: 40,
      svg: `<svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="20" rx="56" ry="16" fill="#5D4037"/>
        <ellipse cx="60" cy="18" rx="52" ry="13" fill="#6D4C41"/>
        <g fill="#795548" opacity="0.7">
          <ellipse cx="20" cy="18" rx="8" ry="3"/><ellipse cx="40" cy="15" rx="10" ry="3.5"/>
          <ellipse cx="65" cy="20" rx="9" ry="3"/><ellipse cx="85" cy="16" rx="8" ry="3.5"/>
          <ellipse cx="100" cy="20" rx="7" ry="2.5"/>
        </g>
        <g fill="#4E342E" opacity="0.5">
          <ellipse cx="30" cy="22" rx="6" ry="2"/><ellipse cx="55" cy="14" rx="7" ry="2.5"/>
          <ellipse cx="78" cy="22" rx="8" ry="2"/><ellipse cx="95" cy="14" rx="6" ry="2.5"/>
        </g>
      </svg>`
    }
  ],
  decor: [
    {
      id: 'bird-bath',
      name: 'Bird Bath',
      price: 120,
      width: 55,
      height: 75,
      svg: `<svg viewBox="0 0 55 75" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="27" cy="70" rx="18" ry="5" fill="#90A4AE"/>
        <rect x="24" y="35" width="7" height="35" rx="2" fill="#B0BEC5"/>
        <ellipse cx="27" cy="35" rx="24" ry="8" fill="#90A4AE"/>
        <ellipse cx="27" cy="33" rx="22" ry="7" fill="#B0BEC5"/>
        <ellipse cx="27" cy="33" rx="18" ry="5" fill="#64B5F6" opacity="0.6"/>
        <path d="M18 28 C16 25, 18 22, 22 24 L20 26Z" fill="#FDD835"/>
        <circle cx="19" cy="24" r="1" fill="#333"/>
      </svg>`
    },
    {
      id: 'garden-bench',
      name: 'Garden Bench',
      price: 220,
      width: 100,
      height: 60,
      svg: `<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="25" width="84" height="6" rx="2" fill="#8D6E63"/>
        <rect x="10" y="18" width="80" height="4" rx="1" fill="#A1887F"/>
        <rect x="10" y="12" width="80" height="4" rx="1" fill="#A1887F"/>
        <rect x="8" y="6" width="4" height="48" rx="1" fill="#6D4C41"/>
        <rect x="88" y="6" width="4" height="48" rx="1" fill="#6D4C41"/>
        <rect x="12" y="32" width="5" height="22" rx="1" fill="#6D4C41"/>
        <rect x="83" y="32" width="5" height="22" rx="1" fill="#6D4C41"/>
      </svg>`
    },
    {
      id: 'fountain',
      name: 'Garden Fountain',
      price: 450,
      width: 80,
      height: 95,
      svg: `<svg viewBox="0 0 80 95" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="88" rx="35" ry="7" fill="#78909C"/>
        <ellipse cx="40" cy="85" rx="32" ry="6" fill="#90A4AE"/>
        <ellipse cx="40" cy="85" rx="28" ry="4.5" fill="#64B5F6" opacity="0.5"/>
        <rect x="35" y="60" width="10" height="25" rx="2" fill="#B0BEC5"/>
        <ellipse cx="40" cy="60" rx="22" ry="6" fill="#78909C"/>
        <ellipse cx="40" cy="58" rx="20" ry="5" fill="#90A4AE"/>
        <ellipse cx="40" cy="58" rx="16" ry="3.5" fill="#64B5F6" opacity="0.5"/>
        <rect x="37" y="38" width="6" height="20" rx="2" fill="#B0BEC5"/>
        <ellipse cx="40" cy="38" rx="12" ry="4.5" fill="#78909C"/>
        <ellipse cx="40" cy="36" rx="10" ry="3.5" fill="#90A4AE"/>
        <path d="M40 32 C38 22, 35 15, 40 10 C45 15, 42 22, 40 32Z" fill="#64B5F6" opacity="0.6"/>
        <path d="M40 12 C36 20, 32 16, 30 22" stroke="#64B5F6" stroke-width="1.5" fill="none" opacity="0.5"/>
        <path d="M40 12 C44 20, 48 16, 50 22" stroke="#64B5F6" stroke-width="1.5" fill="none" opacity="0.5"/>
      </svg>`
    },
    {
      id: 'solar-lights',
      name: 'Solar Path Lights (set of 4)',
      price: 60,
      width: 130,
      height: 50,
      svg: `<svg viewBox="0 0 130 50" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15,0)">
          <rect x="4" y="20" width="3" height="25" rx="1" fill="#757575"/>
          <path d="M0 20 L5.5 12 L11 20Z" fill="#FDD835"/><circle cx="5.5" cy="10" r="5" fill="#FFF9C4" opacity="0.4"/>
        </g>
        <g transform="translate(45,0)">
          <rect x="4" y="20" width="3" height="25" rx="1" fill="#757575"/>
          <path d="M0 20 L5.5 12 L11 20Z" fill="#FDD835"/><circle cx="5.5" cy="10" r="5" fill="#FFF9C4" opacity="0.4"/>
        </g>
        <g transform="translate(75,0)">
          <rect x="4" y="20" width="3" height="25" rx="1" fill="#757575"/>
          <path d="M0 20 L5.5 12 L11 20Z" fill="#FDD835"/><circle cx="5.5" cy="10" r="5" fill="#FFF9C4" opacity="0.4"/>
        </g>
        <g transform="translate(105,0)">
          <rect x="4" y="20" width="3" height="25" rx="1" fill="#757575"/>
          <path d="M0 20 L5.5 12 L11 20Z" fill="#FDD835"/><circle cx="5.5" cy="10" r="5" fill="#FFF9C4" opacity="0.4"/>
        </g>
      </svg>`
    },
    {
      id: 'planter-pot',
      name: 'Large Planter Pot',
      price: 75,
      width: 55,
      height: 60,
      svg: `<svg viewBox="0 0 55 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18 L12 55 L43 55 L47 18Z" fill="#E64A19"/>
        <path d="M10 18 L13 52 L27 52 L27 18Z" fill="#F4511E" opacity="0.5"/>
        <rect x="5" y="14" width="45" height="6" rx="2" fill="#BF360C"/>
        <ellipse cx="27" cy="14" rx="22" ry="4" fill="#D84315"/>
        <ellipse cx="27" cy="14" rx="18" ry="3" fill="#5D4037"/>
        <ellipse cx="18" cy="8" rx="8" ry="8" fill="#4CAF50"/>
        <ellipse cx="34" cy="6" rx="9" ry="9" fill="#388E3C"/>
        <ellipse cx="27" cy="3" rx="7" ry="7" fill="#66BB6A"/>
        <circle cx="22" cy="4" r="3" fill="#E91E63"/><circle cx="22" cy="4" r="1.5" fill="#F48FB1"/>
        <circle cx="32" cy="2" r="2.5" fill="#FDD835"/><circle cx="32" cy="2" r="1.2" fill="#FFF9C4"/>
      </svg>`
    },
    {
      id: 'rock-boulder',
      name: 'Decorative Boulder',
      price: 95,
      width: 70,
      height: 50,
      svg: `<svg viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="35" cy="35" rx="32" ry="14" fill="#757575"/>
        <ellipse cx="35" cy="28" rx="28" ry="18" fill="#9E9E9E"/>
        <ellipse cx="30" cy="25" rx="22" ry="15" fill="#BDBDBD" opacity="0.5"/>
        <path d="M18 20 C22 15, 38 12, 50 18" stroke="#E0E0E0" stroke-width="1.5" fill="none" opacity="0.5"/>
        <path d="M15 30 C20 25, 30 22, 42 25" stroke="#E0E0E0" stroke-width="1" fill="none" opacity="0.3"/>
      </svg>`
    },
    {
      id: 'trellis',
      name: 'Garden Trellis',
      price: 85,
      width: 50,
      height: 100,
      svg: `<svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="3" height="90" rx="1" fill="#8D6E63"/>
        <rect x="44" y="5" width="3" height="90" rx="1" fill="#8D6E63"/>
        <line x1="6" y1="15" x2="44" y2="15" stroke="#A1887F" stroke-width="2"/>
        <line x1="6" y1="30" x2="44" y2="30" stroke="#A1887F" stroke-width="2"/>
        <line x1="6" y1="45" x2="44" y2="45" stroke="#A1887F" stroke-width="2"/>
        <line x1="6" y1="60" x2="44" y2="60" stroke="#A1887F" stroke-width="2"/>
        <line x1="6" y1="75" x2="44" y2="75" stroke="#A1887F" stroke-width="2"/>
        <line x1="17" y1="5" x2="17" y2="95" stroke="#A1887F" stroke-width="1.5"/>
        <line x1="33" y1="5" x2="33" y2="95" stroke="#A1887F" stroke-width="1.5"/>
        <path d="M10 80 C12 65, 20 55, 15 40 C12 30, 18 20, 22 12" stroke="#4CAF50" stroke-width="2" fill="none"/>
        <path d="M38 85 C36 70, 30 58, 35 45 C38 35, 32 25, 28 15" stroke="#388E3C" stroke-width="2" fill="none"/>
        <circle cx="22" cy="12" r="3" fill="#E91E63"/><circle cx="22" cy="12" r="1.5" fill="#F48FB1"/>
        <circle cx="15" cy="38" r="2.5" fill="#E91E63"/><circle cx="15" cy="38" r="1.2" fill="#F48FB1"/>
        <circle cx="28" cy="15" r="2.5" fill="#E91E63"/><circle cx="28" cy="15" r="1.2" fill="#F48FB1"/>
        <circle cx="35" cy="43" r="3" fill="#E91E63"/><circle cx="35" cy="43" r="1.5" fill="#F48FB1"/>
      </svg>`
    }
  ]
};
