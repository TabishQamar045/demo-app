import { SvgIcon, SvgIconProps } from '@mui/material';

const YouTubeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
  </SvgIcon>
);

const MP5Icon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z M16,14H8v-2h8V14z M13,9V3.5 L18.5,9H13z" />
    <text x="7" y="16" style={{ fontSize: '6px', fontWeight: 'bold' }}>MP5</text>
  </SvgIcon>
);

const TXTIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z M16,14H8v-2h8V14z M13,9V3.5 L18.5,9H13z" />
    <text x="7" y="16" style={{ fontSize: '6px', fontWeight: 'bold' }}>TXT</text>
  </SvgIcon>
);

export { YouTubeIcon, MP5Icon, TXTIcon };
