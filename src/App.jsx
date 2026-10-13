import { useState } from 'react';
import {
  AppBar, Box, Button, Collapse, GlobalStyles, IconButton, Stack, Toolbar, Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import CheckIcon from '@mui/icons-material/Check';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import shirtArtwork from './assets/custom-tee-artwork.jpg';
import photoClockArtwork from './assets/photo-clock-artwork.jpg';
import { whatsappUrl, INSTAGRAM_URL, INSTAGRAM_HANDLE, PHONE_DISPLAY } from './config.js';
import { colors } from './theme.js';

const displayFont = "'Space Grotesk', sans-serif";
const NAV = [
  ['Creations', '#creations'],
  ['How it works', '#how-it-works'],
  ['Our story', '#about'],
];
const wrap = { maxWidth: 1320, mx: 'auto', px: { xs: 2.5, sm: 4, lg: 6 } };
const edge = `2.5px solid ${colors.ink}`;
const hard = (s = 6, c = colors.ink) => `${s}px ${s}px 0 ${c}`;
const reveal = (delay = 0) => ({ animation: `riseIn .7s cubic-bezier(.2,.7,.2,1) ${delay}s both` });

// Chunky "sticker" button: lifts on hover, presses flat on click
const pop = (bg, fg = colors.ink) => ({
  bgcolor: bg, color: fg, border: edge, borderRadius: 99, boxShadow: hard(4),
  fontWeight: 700, px: 3, minHeight: 50, fontSize: 14, textTransform: 'none',
  transition: 'transform .15s, box-shadow .15s',
  '&:hover': { bgcolor: bg, transform: 'translate(-2px,-2px)', boxShadow: hard(7) },
  '&:active': { transform: 'translate(3px,3px)', boxShadow: hard(1) },
});

const sticker = (bg, rot, extra = {}) => ({
  bgcolor: bg, border: edge, boxShadow: hard(4), transform: `rotate(${rot}deg)`,
  fontWeight: 700, color: colors.ink, ...extra,
});

function WaButton({ message, children, ...props }) {
  return (
      <Button component="a" href={whatsappUrl(message)} target="_blank" rel="noreferrer" {...props}>
        {children}
      </Button>
  );
}

function Heading({ children, sx }) {
  return (
      <Typography variant="h2" sx={{ fontFamily: displayFont, fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.07em', color: colors.ink, ...sx }}>
        {children}
      </Typography>
  );
}

// Hand-drawn style wavy underline for headline words
function Squiggle({ color = colors.yellow }) {
  return (
      <Box component="svg" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"
           sx={{ position: 'absolute', left: 0, bottom: -10, width: '100%', height: 14, zIndex: -1 }}>
        <path d="M2 7 Q 14 0 26 7 T 50 7 T 74 7 T 98 7 T 122 7 T 146 7 T 170 7 T 198 7" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
      </Box>
  );
}

const globals = (
    <GlobalStyles styles={{
      '@keyframes riseIn': { from: { opacity: 0, transform: 'translateY(26px)' }, to: { opacity: 1, transform: 'none' } },
      '@keyframes marquee': { to: { transform: 'translateX(-50%)' } },
      '@keyframes wiggle': { '0%,100%': { transform: 'rotate(-11deg)' }, '50%': { transform: 'rotate(-5deg) scale(1.05)' } },
      '@media (prefers-reduced-motion: reduce)': { '*': { animation: 'none !important', transition: 'none !important' } },
      html: { scrollBehavior: 'smooth' },
    }} />
);

/* ---------------------------------- Ticker --------------------------------- */
const TICKER = ['Made personal in Aralvaimozhi', 'Custom T-shirts', 'Photo clocks', 'Shipping all over India', 'Your idea, your print'];

function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
      <Box sx={{ bgcolor: colors.ink, color: '#f9e67b', overflow: 'hidden', py: 1.25 }} aria-label="Made personal in Aralvaimozhi. Shipping all over India.">
        <Box sx={{ display: 'flex', width: 'max-content', animation: 'marquee 32s linear infinite' }} aria-hidden="true">
          {[0, 1].map((k) => (
              <Stack key={k} direction="row" alignItems="center" sx={{ flexShrink: 0 }}>
                {items.slice(0, TICKER.length).map((t) => (
                    <Stack key={t} direction="row" alignItems="center" sx={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em' }}>
                      <span>{t}</span>
                      <AutoAwesomeIcon sx={{ fontSize: 15, mx: 3, color: colors.pink }} />
                    </Stack>
                ))}
              </Stack>
          ))}
        </Box>
      </Box>
  );
}

/* ---------------------------------- Header --------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const enquiry = 'Hi Jeyvar Prints! I would like to enquire about a custom gift.';

  return (
      <>
        <Ticker />
        <AppBar position="sticky" elevation={0} color="inherit"
                sx={{ bgcolor: 'rgba(247,244,231,.95)', backdropFilter: 'blur(12px)', borderBottom: edge }}>
          <Toolbar disableGutters sx={{ ...wrap, width: '100%', height: 76, justifyContent: 'space-between' }}>
            <Stack component="a" href="#home" onClick={close} direction="row" alignItems="center" spacing={1.5}
                   sx={{ textDecoration: 'none', color: 'inherit', '&:hover .logo': { transform: 'rotate(-12deg) scale(1.08)' } }} aria-label="Jeyvar Prints home">
              <Box className="logo" sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: colors.purple, color: '#ffdf48', border: edge, boxShadow: hard(3), display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 15, letterSpacing: '-0.1em', transition: 'transform .25s' }}>JP</Box>
              <Box sx={{ lineHeight: 1.2 }}>
                <Typography sx={{ fontFamily: displayFont, fontWeight: 700, fontSize: 18, letterSpacing: '-0.05em', lineHeight: 1.1 }}>Jeyvar Prints</Typography>
                <Typography sx={{ fontSize: 11, fontWeight: 600, color: '#70647a' }}>Make it yours</Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }} component="nav" aria-label="Main navigation">
              {NAV.map(([label, href]) => (
                  <Typography key={href} component="a" href={href}
                              sx={{ fontSize: 14, fontWeight: 600, color: colors.ink, textDecoration: 'none', px: 2, py: 0.9, borderRadius: 99, border: '2px solid transparent', transition: 'all .15s', '&:hover': { bgcolor: colors.yellow, borderColor: colors.ink, transform: 'rotate(-2deg)' } }}>
                    {label}
                  </Typography>
              ))}
            </Stack>

            <WaButton message={enquiry} variant="contained" endIcon={<NorthEastIcon sx={{ fontSize: 15 }} />}
                      sx={{ ...pop(colors.yellow), display: { xs: 'none', sm: 'inline-flex' }, minHeight: 44 }}>
              Let's make something
            </WaButton>

            <IconButton aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}
                        sx={{ display: { xs: 'inline-flex', sm: 'none' }, border: edge, boxShadow: hard(3), bgcolor: colors.yellow, color: colors.ink }}>
              {open ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
            </IconButton>
          </Toolbar>

          <Collapse in={open} sx={{ display: { sm: 'none' } }}>
            <Stack component="nav" aria-label="Mobile navigation" spacing={0.5} sx={{ px: 2.5, py: 2, borderTop: edge }}>
              {NAV.map(([label, href]) => (
                  <Button key={href} href={href} onClick={close}
                          sx={{ justifyContent: 'flex-start', color: colors.ink, fontWeight: 700, borderRadius: 3, py: 1.5, '&:hover': { bgcolor: colors.yellow } }}>
                    {label}
                  </Button>
              ))}
              <WaButton message={enquiry} variant="contained" endIcon={<NorthEastIcon />} sx={{ ...pop(colors.yellow), mt: 1 }}>
                Message us on WhatsApp
              </WaButton>
            </Stack>
          </Collapse>
        </AppBar>
      </>
  );
}

/* ----------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
      <Box id="home" sx={{ bgcolor: colors.cream, position: 'relative', isolation: 'isolate', overflow: 'hidden' }}>
        {/* background doodles */}
        <Box aria-hidden="true" sx={{ position: 'absolute', zIndex: -1, top: 40, left: '46%', width: 90, height: 90, borderRadius: '50%', border: `10px solid ${colors.pink}`, opacity: 0.8, display: { xs: 'none', lg: 'block' } }} />
        <Box aria-hidden="true" sx={{ position: 'absolute', zIndex: -1, bottom: 90, left: -40, width: 150, height: 150, bgcolor: colors.yellow, borderRadius: '42% 58% 55% 45%', opacity: 0.55 }} />

        <Box sx={{ ...wrap, display: 'grid', alignItems: 'center', gap: 5, py: { xs: 6, lg: 9 }, minHeight: { xs: 650, lg: 720 }, gridTemplateColumns: { xs: '1fr', lg: '.95fr 1.05fr' } }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ ...reveal(0), ...sticker('#eee5fa', -2), display: 'inline-flex', borderRadius: 99, px: 2, py: 0.9, fontSize: 13 }}>
              <AutoAwesomeIcon sx={{ fontSize: 16, color: colors.purple }} />
              <span>Gifts with a little more you</span>
            </Stack>
            <Typography variant="h1" sx={{ ...reveal(0.12), fontFamily: displayFont, fontWeight: 700, mt: 3.5, maxWidth: 650, fontSize: 'clamp(3.6rem,7.6vw,6.8rem)', lineHeight: 0.92, letterSpacing: '-0.075em' }}>
              Keep your<br />people{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block', color: colors.purple, transform: 'rotate(-2deg)' }}>
                close.
                <Squiggle />
              </Box>
              <br />Wear your<br />world.
            </Typography>
            <Typography sx={{ ...reveal(0.23), mt: 3.5, maxWidth: 450, fontSize: { xs: 16, sm: 18 }, lineHeight: 1.7, color: '#4f4459' }}>
              A favourite face on the wall. A design that feels like yours. Jeyvar Prints turns your moments into vivid, made-for-you gifts.
            </Typography>
            <Stack direction="row" flexWrap="wrap" alignItems="center" gap={2} sx={{ ...reveal(0.3), mt: 4.5 }}>
              <WaButton message="Hi Jeyvar Prints! I have an idea for a personalized gift." variant="contained" endIcon={<ArrowForwardIcon />}
                        sx={{ ...pop(colors.purple, '#fff'), minHeight: 56, px: 3.5, fontSize: 15, boxShadow: hard(5, colors.ink) }}>
                Start a custom order
              </WaButton>
              <Button href="#creations" sx={{ ...pop('#fff'), minHeight: 56, px: 3 }}>See what we make</Button>
            </Stack>
          </Box>

          <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto', ml: { lg: 'auto' }, ...reveal(0.15) }}>
            <Box sx={{ ...sticker(colors.yellow, -11), position: 'absolute', zIndex: 2, top: { xs: -8, sm: 6 }, right: { xs: -6, sm: -22 }, width: { xs: 100, sm: 122 }, height: { xs: 100, sm: 122 }, borderRadius: '50%', display: 'grid', placeItems: 'center', textAlign: 'center', fontSize: { xs: 12, sm: 13 }, lineHeight: 1.2, animation: 'wiggle 4s ease-in-out infinite' }}>
              <span>Your idea<br />Your story<br /><span style={{ fontSize: 22 }}>✳</span><br />Your print</span>
            </Box>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ ...sticker(colors.pink, -4), position: 'absolute', zIndex: 2, bottom: -18, left: { xs: -6, sm: -34 }, borderRadius: 99, px: 2, py: 1.2, fontSize: 13, color: '#fff' }}>
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>Made to mean more</span>
            </Stack>
            <Box sx={{ position: 'relative', transform: 'rotate(2deg)', overflow: 'hidden', borderRadius: { xs: '2rem', sm: '2.6rem' }, border: `3px solid ${colors.ink}`, bgcolor: '#27113d', boxShadow: hard(14, colors.purple) }}>
              <Box component="img" src={photoClockArtwork} alt="Jeyvar Prints personalized photo clock design" sx={{ display: 'block', width: '100%', height: 'auto', maxHeight: 590, objectFit: 'contain' }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderTop: edge, borderBottom: edge, bgcolor: colors.yellow }}>
          <Stack direction="row" flexWrap="wrap" justifyContent={{ xs: 'center', lg: 'space-between' }} alignItems="center" columnGap={{ xs: 4, sm: 6 }} rowGap={1} sx={{ ...wrap, py: 1.75, fontSize: { xs: 13, sm: 15 }, fontWeight: 700, fontFamily: displayFont, letterSpacing: '-0.02em' }}>
            <span>Personalized photo clocks</span>
            <Box component="span" aria-hidden="true" sx={{ display: { xs: 'none', sm: 'block' } }}>✳</Box>
            <span>Custom printed T-shirts</span>
            <Box component="span" aria-hidden="true" sx={{ display: { xs: 'none', sm: 'block' } }}>✳</Box>
            <span>All-India shipping</span>
          </Stack>
        </Box>
      </Box>
  );
}

/* --------------------------------- Creations ------------------------------- */
function ProductCard({ bg, fg, iconBg, icon, eyebrow, title, copy, copyColor, extra, linkLabel, linkMsg, btnBg, btnFg, imgBg, img, imgAlt, glow, tilt }) {
  return (
      <Box component="article" sx={{ overflow: 'hidden', borderRadius: '2rem', bgcolor: bg, color: fg, border: `3px solid ${colors.ink}`, boxShadow: hard(10), transition: 'transform .25s, box-shadow .25s', '&:hover': { transform: `translate(-3px,-3px) rotate(${tilt}deg)`, boxShadow: hard(15) }, '&:hover img': { transform: 'scale(1.05) rotate(-1.5deg)' } }}>
        <Box sx={{ display: 'grid', minHeight: 440, gridTemplateColumns: { xs: '1fr', md: '.8fr 1.2fr' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', p: { xs: 3.5, sm: 4.5, lg: 5 } }}>
            <Box sx={{ width: 52, height: 52, borderRadius: 4, bgcolor: iconBg, color: colors.ink, border: edge, boxShadow: hard(3), display: 'grid', placeItems: 'center', transform: 'rotate(-6deg)' }}>{icon}</Box>
            <Box sx={{ mt: 4 }}>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{eyebrow}</Typography>
              <Typography variant="h3" sx={{ fontFamily: displayFont, fontWeight: 700, mt: 1, fontSize: { xs: 40, sm: 50 }, lineHeight: 0.95, letterSpacing: '-0.065em' }}>{title}</Typography>
              <Typography sx={{ mt: 2, maxWidth: 260, fontSize: 15, lineHeight: 1.65, color: copyColor }}>{copy}</Typography>
            </Box>
            <Box sx={{ mt: 3.5 }}>{extra}</Box>
            <WaButton message={linkMsg} endIcon={<NorthEastIcon sx={{ fontSize: 15 }} />} sx={{ ...pop(btnBg, btnFg), mt: 3.5, minHeight: 46 }}>
              {linkLabel}
            </WaButton>
          </Box>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: 330, p: { xs: 2, sm: 3 }, bgcolor: imgBg, borderLeft: { md: edge }, borderTop: { xs: edge, md: 0 } }}>
            {glow && <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 45%, rgba(195,123,255,.4), transparent 61%)' }} />}
            <Box component="img" src={img} alt={imgAlt} sx={{ position: 'relative', width: '100%', height: '100%', maxHeight: 490, objectFit: 'contain', transition: 'transform .5s cubic-bezier(.3,1.5,.5,1)' }} />
          </Box>
        </Box>
      </Box>
  );
}

function Creations() {
  return (
      <Box id="creations" sx={{ bgcolor: colors.sand, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 10, sm: 14 } }}>
        <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'flex-end' }} spacing={3} sx={{ mb: { xs: 6, sm: 8 } }}>
            <Box>
              <Box sx={{ ...sticker(colors.pink, -3), display: 'inline-block', color: '#fff', borderRadius: 99, px: 2, py: 0.75, fontSize: 13 }}>The good stuff</Box>
              <Heading sx={{ mt: 2.5, fontSize: 'clamp(2.9rem,5.4vw,5rem)', lineHeight: 0.95 }}>
                Made to be<br />unmistakably <Box component="span" sx={{ position: 'relative', display: 'inline-block', color: colors.purple }}>yours.<Squiggle color={colors.pink} /></Box>
              </Heading>
            </Box>
            <Typography sx={{ maxWidth: 350, fontSize: 16, lineHeight: 1.7, color: '#4f4459' }}>
              Pick a favourite, bring an idea, or tell us who it's for. We'll help you make it personal.
            </Typography>
          </Stack>

          <Box sx={{ display: 'grid', gap: { xs: 4, lg: 5 }, gridTemplateColumns: { xs: '1fr', lg: '1.08fr .92fr' } }}>
            <ProductCard
                bg="#55238b" fg="#fff" iconBg="#f5df4e" icon={<CheckroomIcon />} tilt={-0.8}
                eyebrow="Wear your idea" title={<>Custom<br />T-shirts</>}
                copy="Put your art, your favourite thing, your whole energy on a tee." copyColor="rgba(255,255,255,.8)"
                extra={<Stack spacing={1.25} sx={{ fontSize: 13, fontWeight: 600 }}>
                  {['Breathable fabric', 'Long-lasting print', 'Premium quality'].map((t) => (
                      <Stack key={t} direction="row" alignItems="center" spacing={1}>
                        <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#f6df51', color: colors.ink, display: 'grid', placeItems: 'center' }}><CheckIcon sx={{ fontSize: 13 }} /></Box>
                        <span>{t}</span>
                      </Stack>
                  ))}
                </Stack>}
                linkLabel="Ask about a T-shirt" linkMsg="Hi Jeyvar Prints! I would like to enquire about a custom printed T-shirt."
                btnBg="#f5df4e" imgBg="#32134f" img={shirtArtwork} imgAlt="Jeyvar Prints custom purple printed T-shirts" glow
            />
            <ProductCard
                bg={colors.yellow} fg={colors.ink} iconBg="#fff" icon={<AutoAwesomeIcon fontSize="small" />} tilt={0.8}
                eyebrow="Keep them close" title={<>Photo<br />clocks</>}
                copy="Make family photos part of the everyday, not just the camera roll." copyColor="#4a3f26"
                extra={<Box sx={{ ...sticker('#fff', 2), borderRadius: 99, px: 1.75, py: 0.9, fontSize: 12 }}>Personalized with your photos</Box>}
                linkLabel="Ask about a photo clock" linkMsg="Hi Jeyvar Prints! I would like to enquire about a personalized photo clock."
                btnBg={colors.ink} btnFg="#f5df4e" imgBg="#f9e98c" img={photoClockArtwork} imgAlt="Personalized photo clock surrounded by family photos"
            />
          </Box>
        </Box>
      </Box>
  );
}

/* ------------------------------- How it works ------------------------------ */
const STEPS = [
  ['1', 'Tell us the story', 'A name, a photo, a sketch, a favourite character. Start with whatever makes it yours.', colors.yellow, -1.5],
  ['2', 'Let’s shape the details', 'Message us on WhatsApp to talk through the personal touches for your T-shirt or photo clock.', '#fff', 1],
  ['3', 'Made for you, sent to you', 'Your custom piece, made with care in Aralvaimozhi. All-India shipping is available.', colors.pink, -0.8],
];

function HowItWorks() {
  return (
      <Box id="how-it-works" sx={{ position: 'relative', overflow: 'hidden', bgcolor: colors.purple, color: '#fff', borderTop: edge, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 10, sm: 14 } }}>
        <Box aria-hidden="true" sx={{ position: 'absolute', top: -60, right: -70, width: 300, height: 300, borderRadius: '50%', border: `36px solid ${colors.yellow}`, opacity: 0.25 }} />
        <Box sx={{ position: 'relative', maxWidth: 1320, mx: 'auto', display: 'grid', gap: { xs: 6, lg: 10 }, gridTemplateColumns: { xs: '1fr', lg: '.8fr 1.2fr' }, alignItems: 'center' }}>
          <Box>
            <Heading sx={{ color: '#fff', maxWidth: 450, fontSize: 'clamp(3rem,5.8vw,5.4rem)', lineHeight: 0.93 }}>
              Your idea,<br />made <Box component="span" sx={{ position: 'relative', display: 'inline-block', color: colors.yellow }}>real.<Squiggle color={colors.pink} /></Box>
            </Heading>
            <Typography sx={{ mt: 3.5, maxWidth: 380, fontSize: 16, lineHeight: 1.7, color: '#e6daf2' }}>
              No catalogue maze. Just a conversation about what you're imagining and the people you're making it for.
            </Typography>
            <WaButton message="Hi Jeyvar Prints! I have an idea I would love to make personal." variant="contained" endIcon={<ArrowForwardIcon />}
                      sx={{ ...pop(colors.yellow), mt: 4, minHeight: 54 }}>
              Tell us your idea
            </WaButton>
          </Box>
          <Stack spacing={3}>
            {STEPS.map(([n, title, copy, bg, rot]) => (
                <Stack key={n} direction="row" alignItems="center" spacing={3}
                       sx={{ ...sticker(bg, rot, { boxShadow: hard(7) }), borderRadius: '1.5rem', p: { xs: 2.5, sm: 3.5 }, transition: 'transform .2s', '&:hover': { transform: 'rotate(0deg) translateY(-4px)' } }}>
                  <Box sx={{ flexShrink: 0, width: { xs: 48, sm: 60 }, height: { xs: 48, sm: 60 }, borderRadius: '50%', bgcolor: colors.ink, color: bg === '#fff' ? colors.yellow : '#fff', display: 'grid', placeItems: 'center', fontFamily: displayFont, fontSize: { xs: 22, sm: 28 }, fontWeight: 700 }}>{n}</Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontFamily: displayFont, fontSize: { xs: 21, sm: 26 }, fontWeight: 700, letterSpacing: '-0.04em' }}>{title}</Typography>
                    <Typography sx={{ mt: 0.75, maxWidth: 470, fontSize: 14.5, lineHeight: 1.6 }}>{copy}</Typography>
                  </Box>
                </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
  );
}

/* ----------------------------------- About --------------------------------- */
function About() {
  return (
      <Box id="about" sx={{ bgcolor: colors.cream, borderTop: edge, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 10, sm: 14 } }}>
        <Box sx={{ maxWidth: 1320, mx: 'auto', display: 'grid', alignItems: 'center', gap: 7, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 520, mx: 'auto' }}>
            <Box sx={{ position: 'relative', overflow: 'hidden', transform: 'rotate(-2deg)', borderRadius: '2rem', bgcolor: '#63289e', border: `3px solid ${colors.ink}`, boxShadow: hard(12, colors.yellow), p: { xs: 2, sm: 3 } }}>
              <Box component="img" src={shirtArtwork} alt="Vivid personalized T-shirt artwork from Jeyvar Prints" sx={{ display: 'block', width: '100%', height: 'auto', maxHeight: 440, objectFit: 'contain' }} />
            </Box>
            <Box sx={{ ...sticker(colors.pink, 5), position: 'absolute', bottom: -20, right: { xs: -4, sm: -22 }, color: '#fff', borderRadius: 99, px: 2, py: 1.1, fontSize: 13 }}>
              Aralvaimozhi, Tamil Nadu
            </Box>
          </Box>
          <Box sx={{ pl: { md: 4, lg: 8 } }}>
            <Heading sx={{ fontSize: 'clamp(2.9rem,5.2vw,4.8rem)' }}>Personal means<br />something here.</Heading>
            <Typography sx={{ mt: 3, maxWidth: 490, fontSize: 16, lineHeight: 1.7, color: '#4f4459' }}>
              Jeyvar Prints is a custom-print and personalized-gift shop in Aralvaimozhi. We make bold printed tees and photo clocks that turn your own moments and ideas into something you can hold onto.
            </Typography>
            <Typography sx={{ mt: 2, maxWidth: 490, fontSize: 16, lineHeight: 1.7, color: '#4f4459' }}>
              It could be for someone you love, or simply a way to show the world what you're into. Either way, it starts with your idea.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 4 }}>
              {[['Custom T-shirts', colors.yellow, -2], ['Photo clocks', '#eee5fa', 1.5], ['All-India shipping', '#fff', -1]].map(([tag, bg, r]) => (
                  <Box key={tag} sx={{ ...sticker(bg, r), borderRadius: 99, px: 2, py: 0.9, fontSize: 13 }}>{tag}</Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
  );
}

/* ------------------------------------ CTA ---------------------------------- */
function Cta() {
  return (
      <Box sx={{ bgcolor: colors.sand, borderTop: edge, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 8, sm: 12 } }}>
        <Box sx={{ maxWidth: 1320, mx: 'auto', overflow: 'hidden', borderRadius: '2.2rem', bgcolor: '#e9dff3', border: `3px solid ${colors.ink}`, boxShadow: hard(12), display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' } }}>
          <Box sx={{ p: { xs: 4, sm: 6, lg: 8 } }}>
            <Heading sx={{ maxWidth: 550, fontSize: 'clamp(2.9rem,5.2vw,5rem)', lineHeight: 0.93 }}>
              Make their<br />everyday a little<br /><Box component="span" sx={{ position: 'relative', display: 'inline-block', color: colors.purple }}>more personal.<Squiggle /></Box>
            </Heading>
            <Typography sx={{ mt: 3, maxWidth: 410, fontSize: 15, lineHeight: 1.7, color: '#4f4459' }}>
              Send a photo. Share a design idea. Let's make something that feels like it could only belong to them.
            </Typography>
            <WaButton message="Hi Jeyvar Prints! I am looking for a personalized gift and would love to discuss an idea." variant="contained" endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
                      sx={{ ...pop(colors.ink, colors.yellow), mt: 4, minHeight: 56, boxShadow: hard(5, colors.purple), '&:hover': { bgcolor: colors.ink, transform: 'translate(-2px,-2px)', boxShadow: hard(8, colors.purple) } }}>
              Start a WhatsApp chat
            </WaButton>
          </Box>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', bgcolor: colors.yellow, borderLeft: { md: edge }, borderTop: { xs: edge, md: 0 }, p: 2.5, minHeight: { xs: 300, sm: 420 } }}>
            <Box aria-hidden="true" sx={{ position: 'absolute', top: -64, right: -64, width: 224, height: 224, borderRadius: '50%', border: `28px solid ${colors.pink}`, opacity: 0.85 }} />
            <Box sx={{ position: 'relative', width: 'min(70%, 300px)', transform: 'rotate(4deg)', overflow: 'hidden', borderRadius: '1.4rem', border: `3px solid ${colors.ink}`, bgcolor: '#391b54', boxShadow: hard(8) }}>
              <Box component="img" src={photoClockArtwork} alt="A photo clock is a personal gift for the everyday" sx={{ display: 'block', width: '100%', height: 'auto' }} />
            </Box>
            <Box sx={{ ...sticker(colors.pink, -7), position: 'absolute', bottom: { xs: 28, sm: 44 }, left: { xs: 20, sm: 40 }, color: '#fff', borderRadius: 99, px: 2, py: 1, fontSize: 13 }}>
              Just add your photos
            </Box>
          </Box>
        </Box>
      </Box>
  );
}

/* ---------------------------------- Footer --------------------------------- */
function Footer() {
  const linkHover = { transition: 'color .2s', textDecoration: 'none', color: 'inherit' };
  return (
      <Box component="footer" id="contact" sx={{ bgcolor: colors.ink, color: '#f6f0e4', px: { xs: 2.5, sm: 4, lg: 6 }, pt: { xs: 7, sm: 9 }, pb: { xs: 14, sm: 6 } }}>
        <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
          <Box sx={{ display: 'grid', gap: 5, pb: 5.5, borderBottom: '1px solid rgba(255,255,255,.2)', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, alignItems: { md: 'end' } }}>
            <Box>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: '#f2d94a', color: colors.ink, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 16, letterSpacing: '-0.1em', transform: 'rotate(-8deg)' }}>JP</Box>
                <Box>
                  <Typography sx={{ fontFamily: displayFont, fontWeight: 700, fontSize: 22, letterSpacing: '-0.05em' }}>Jeyvar Prints</Typography>
                  <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#c3b5cb' }}>Make it yours</Typography>
                </Box>
              </Stack>
              <Typography sx={{ mt: 2.5, maxWidth: 420, fontSize: 14, lineHeight: 1.7, color: '#c9bbd0' }}>
                Personalized gifts and custom prints, made with your ideas in Aralvaimozhi.
              </Typography>
            </Box>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              <WaButton message="Hi Jeyvar Prints! I would like to enquire about a custom print." variant="contained" startIcon={<WhatsAppIcon />}
                        sx={{ ...pop('#f2d94a'), boxShadow: hard(4, colors.purple), borderColor: '#f2d94a' }}>
                WhatsApp us
              </WaButton>
              <Button component="a" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" variant="outlined" endIcon={<NorthEastIcon sx={{ fontSize: 15 }} />}
                      sx={{ ...pop('transparent', '#fff'), borderColor: 'rgba(255,255,255,.5)', boxShadow: 'none', '&:hover': { bgcolor: colors.pink, borderColor: colors.pink, transform: 'translateY(-3px) rotate(-1deg)', boxShadow: 'none' } }}>
                Instagram
              </Button>
            </Stack>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={2} sx={{ pt: 3, fontSize: 13, color: '#bcaec5' }}>
            <Typography sx={{ fontSize: 'inherit' }}>
              Aralvaimozhi <Box component="span" sx={{ mx: 1, color: '#80718a' }}>·</Box>
              <Box component="a" href="tel:+916379087636" sx={{ ...linkHover, '&:hover': { color: '#fff' } }}>{PHONE_DISPLAY}</Box>
            </Typography>
            <Box component="a" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" sx={{ ...linkHover, fontWeight: 600, '&:hover': { color: '#f2d94a' } }}>{INSTAGRAM_HANDLE}</Box>
            <Typography sx={{ fontSize: 'inherit' }}>Custom T-shirts · Personalized photo clocks</Typography>
          </Stack>
        </Box>
      </Box>
  );
}

/* ------------------------------ Floating WhatsApp --------------------------- */
function FloatingWhatsApp() {
  return (
      <Button component="a" href={whatsappUrl('Hi Jeyvar Prints! I would like to enquire about a custom gift.')} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"
              variant="contained" startIcon={<WhatsAppIcon />}
              sx={{ ...pop('#25d366'), position: 'fixed', zIndex: 1300, bottom: { xs: 16, sm: 24 }, right: { xs: 16, sm: 24 }, px: { xs: 2, sm: 2.5 }, '&:hover': { bgcolor: '#25d366', transform: 'translate(-2px,-2px) rotate(-2deg)', boxShadow: hard(7) } }}>
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Enquire on WhatsApp</Box>
        <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>WhatsApp</Box>
      </Button>
  );
}

export default function App() {
  return (
      <Box component="main" sx={{ overflow: 'hidden' }}>
        {globals}
        <Header />
        <Hero />
        <Creations />
        <HowItWorks />
        <About />
        <Cta />
        <Footer />
        <FloatingWhatsApp />
      </Box>
  );
}