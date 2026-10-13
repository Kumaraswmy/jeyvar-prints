import { useState } from 'react';
import {
  AppBar, Box, Button, Chip, Collapse, Container, IconButton, Stack, Toolbar, Typography,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
  ['The personal touch', '#how-it-works'],
  ['Our story', '#about'],
];
const wrap = { maxWidth: 1320, mx: 'auto', px: { xs: 2.5, sm: 4, lg: 6 } };
const reveal = (delay = 0) => ({ animation: `riseIn .7s cubic-bezier(.2,.7,.2,1) ${delay}s both` });

// Small helper: a MUI Button that opens WhatsApp with a message
function WaButton({ message, children, ...props }) {
  return (
    <Button component="a" href={whatsappUrl(message)} target="_blank" rel="noreferrer" {...props}>
      {children}
    </Button>
  );
}

function Eyebrow({ children, color }) {
  return (
    <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', color }}>{children}</Typography>
  );
}

function Heading({ children, sx }) {
  return (
    <Typography
      variant="h2"
      sx={{ fontFamily: displayFont, fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.07em', color: colors.ink, ...sx }}
    >
      {children}
    </Typography>
  );
}

/* ---------------------------------- Header --------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const enquiry = 'Hi Jeyvar Prints! I would like to enquire about a custom gift.';

  return (
    <>
      <Box sx={{ bgcolor: colors.ink, color: '#f9e67b', textAlign: 'center', px: 2, py: 1.25, fontSize: { xs: 11, sm: 12 }, fontWeight: 600, letterSpacing: '.13em' }}>
        MADE PERSONAL IN ARALVAIMOZHI <Box component="span" sx={{ mx: 1, color: 'rgba(255,255,255,.35)' }}>/</Box> SHIPPING ALL OVER INDIA
      </Box>
      <AppBar position="sticky" elevation={0} color="inherit"
        sx={{ bgcolor: 'rgba(247,244,231,.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(43,25,62,.1)' }}>
        <Toolbar disableGutters sx={{ ...wrap, width: '100%', height: 76, justifyContent: 'space-between' }}>
          <Stack component="a" href="#home" onClick={close} direction="row" alignItems="center" spacing={1.5}
            sx={{ textDecoration: 'none', color: 'inherit' }} aria-label="Jeyvar Prints home">
            <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: colors.purple, color: '#ffdf48', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 15, letterSpacing: '-0.1em' }}>JP</Box>
            <Box sx={{ lineHeight: 1.2 }}>
              <Typography sx={{ fontFamily: displayFont, fontWeight: 700, fontSize: 17, letterSpacing: '-0.05em', lineHeight: 1.15 }}>JEYVAR PRINTS</Typography>
              <Typography sx={{ fontSize: 9, fontWeight: 600, letterSpacing: '.2em', color: '#70647a' }}>MAKE IT YOURS</Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={4.5} sx={{ display: { xs: 'none', md: 'flex' } }} component="nav" aria-label="Main navigation">
            {NAV.map(([label, href]) => (
              <Typography key={href} component="a" href={href}
                sx={{ fontSize: 14, fontWeight: 500, color: '#524660', textDecoration: 'none', transition: 'color .2s', '&:hover': { color: colors.purple } }}>
                {label}
              </Typography>
            ))}
          </Stack>

          <WaButton message={enquiry} variant="contained" endIcon={<NorthEastIcon sx={{ fontSize: 15 }} />}
            sx={{ display: { xs: 'none', sm: 'inline-flex' }, bgcolor: colors.ink, borderRadius: 99, px: 2.5, py: 1.5, fontSize: 12, letterSpacing: '.04em', transition: 'transform .2s', '&:hover': { bgcolor: colors.ink, transform: 'translateY(-2px)' } }}>
            LET'S MAKE SOMETHING
          </WaButton>

          <IconButton aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}
            sx={{ display: { xs: 'inline-flex', sm: 'none' }, border: '1px solid rgba(43,25,62,.15)', color: colors.ink }}>
            {open ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </IconButton>
        </Toolbar>

        <Collapse in={open} sx={{ display: { sm: 'none' } }}>
          <Stack component="nav" aria-label="Mobile navigation" spacing={0.5} sx={{ px: 2.5, py: 2, borderTop: '1px solid rgba(43,25,62,.1)' }}>
            {NAV.map(([label, href]) => (
              <Button key={href} href={href} onClick={close}
                sx={{ justifyContent: 'flex-start', color: '#382649', borderRadius: 3, py: 1.5, '&:hover': { bgcolor: '#eee7d4' } }}>
                {label}
              </Button>
            ))}
            <WaButton message={enquiry} variant="contained" endIcon={<NorthEastIcon />} sx={{ mt: 1, borderRadius: 99, py: 1.5 }}>
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
    <Box id="home" sx={{ bgcolor: colors.cream, position: 'relative', isolation: 'isolate' }}>
      <Box sx={{ ...wrap, display: 'grid', alignItems: 'center', gap: 4, py: { xs: 6, lg: 8 }, minHeight: { xs: 650, lg: 690 }, gridTemplateColumns: { xs: '1fr', lg: '.95fr 1.05fr' } }}>
        <Box sx={{ position: 'relative', zIndex: 1, pt: 2.5, pb: { xs: 2, lg: 6 } }}>
          <Chip icon={<AutoAwesomeIcon sx={{ fontSize: 13, color: 'inherit !important' }} />} label="GIFTS WITH A LITTLE MORE YOU"
            sx={{ ...reveal(0), bgcolor: '#eee5fa', color: '#63299a', border: '1px solid #d9c8ec', fontSize: { xs: 10, sm: 11 }, fontWeight: 700, letterSpacing: '.16em', height: 34 }} />
          <Typography variant="h1" sx={{ ...reveal(0.12), fontFamily: displayFont, fontWeight: 700, mt: 3.5, maxWidth: 650, fontSize: 'clamp(3.4rem,7vw,6.4rem)', lineHeight: 0.93, letterSpacing: '-0.075em' }}>
            Keep your<br />people{' '}
            <Box component="span" sx={{ position: 'relative', display: 'inline-block', color: '#692ab0' }}>
              close.
              <Box component="i" sx={{ position: 'absolute', bottom: -4, left: 4, height: 7, width: '94%', transform: 'rotate(-2deg)', borderRadius: 99, bgcolor: colors.yellow }} />
            </Box>
            <br />Wear your<br />world.
          </Typography>
          <Typography sx={{ ...reveal(0.23), mt: 3.5, maxWidth: 440, fontSize: { xs: 16, sm: 17 }, lineHeight: 1.75, color: '#63596c' }}>
            A favourite face on the wall. A design that feels like yours. Jeyvar Prints turns personal moments into vivid, made-for-you gifts.
          </Typography>
          <Stack direction="row" flexWrap="wrap" alignItems="center" gap={1.5} sx={{ ...reveal(0.23), mt: 4 }}>
            <WaButton message="Hi Jeyvar Prints! I have an idea for a personalized gift." variant="contained" endIcon={<ArrowForwardIcon />}
              sx={{ minHeight: 52, px: 3, borderRadius: 99, fontSize: 14, boxShadow: '0 10px 25px rgba(83,38,130,.17)', transition: 'transform .2s', '&:hover': { transform: 'translateY(-4px)', bgcolor: colors.purpleDark } }}>
              Start a custom order
            </WaButton>
            <Button href="#creations" endIcon={<ArrowDownwardIcon sx={{ fontSize: 15 }} />}
              sx={{ minHeight: 52, px: 2.5, borderRadius: 99, fontSize: 14, color: '#3c2c4c', '&:hover': { bgcolor: '#ebe5d6' } }}>
              See what we make
            </Button>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: 5, fontSize: 12, fontWeight: 500, color: '#746a7b' }}>
            <Stack direction="row" aria-hidden="true">
              {['#ec4899', '#f2d943', '#7d40bc'].map((c, i) => (
                <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c, border: `1px solid ${colors.cream}`, ml: i ? -0.75 : 0 }} />
              ))}
            </Stack>
            <span>Thoughtful details. Bold colour. Made personal.</span>
          </Stack>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, mx: 'auto', ml: { lg: 'auto' } }}>
          <Box sx={{ position: 'absolute', zIndex: 1, top: { xs: 8, sm: 20 }, right: { xs: -16, sm: -20 }, width: { xs: 94, sm: 112 }, height: { xs: 94, sm: 112 }, borderRadius: '50%', bgcolor: '#f1d94e', color: '#342145', display: 'grid', placeItems: 'center', textAlign: 'center', transform: 'rotate(-11deg)', boxShadow: 6, fontSize: { xs: 10, sm: 11 }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '.1em' }}>
            <span>YOUR IDEA<br />YOUR STORY<br /><span style={{ fontSize: 18 }}>✳</span><br />YOUR PRINT</span>
          </Box>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ position: 'absolute', zIndex: 1, bottom: -16, left: { xs: -12, sm: -32 }, transform: 'rotate(-3deg)', bgcolor: colors.cream, border: '1px solid #eee2ff', borderRadius: 99, px: 2, py: 1.5, boxShadow: 6, fontSize: 11, fontWeight: 700, color: '#48256d' }}>
            <Box sx={{ width: 28, height: 28, borderRadius: '50%', bgcolor: colors.purple, color: '#f6dc4a', display: 'grid', placeItems: 'center' }}><AutoAwesomeIcon sx={{ fontSize: 14 }} /></Box>
            <span>MADE TO MEAN MORE</span>
          </Stack>
          <Box sx={{ position: 'relative', transform: 'rotate(1.7deg)', overflow: 'hidden', borderRadius: { xs: '2rem', sm: '2.5rem' }, border: { xs: '9px solid #fff', sm: '12px solid #fff' }, bgcolor: '#27113d', boxShadow: '0 24px 65px rgba(58,31,78,.2)' }}>
            <Box component="img" src={photoClockArtwork} alt="Jeyvar Prints personalized photo clock design" sx={{ display: 'block', width: '100%', height: 'auto', maxHeight: 590, objectFit: 'contain' }} />
          </Box>
          <Box sx={{ position: 'absolute', zIndex: -1, top: '50%', left: { xs: -8, sm: -48 }, width: { xs: 144, sm: 224 }, height: { xs: 144, sm: 224 }, transform: 'translateY(-50%)', borderRadius: '50%', bgcolor: '#f0d93d', opacity: 0.7, filter: 'blur(40px)' }} />
        </Box>
      </Box>

      <Box sx={{ borderTop: '1px solid rgba(43,25,62,.1)', borderBottom: '1px solid rgba(43,25,62,.1)', bgcolor: '#f0ecde' }}>
        <Stack direction="row" flexWrap="wrap" justifyContent={{ xs: 'center', lg: 'space-between' }} alignItems="center" columnGap={{ xs: 4, sm: 6 }} rowGap={1} sx={{ ...wrap, py: 2, textAlign: 'center', fontSize: { xs: 10, sm: 11 }, fontWeight: 700, letterSpacing: '.13em', color: '#574c61' }}>
          <span>PERSONALIZED PHOTO CLOCKS</span>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'block' }, color: '#b6aabb' }}>✳</Box>
          <span>CUSTOM PRINTED T-SHIRTS</span>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'block' }, color: '#b6aabb' }}>✳</Box>
          <span>ALL-INDIA SHIPPING</span>
        </Stack>
      </Box>
    </Box>
  );
}

/* --------------------------------- Creations ------------------------------- */
function ProductCard({ bg, fg, iconBg, iconColor, icon, eyebrow, eyebrowColor, title, copy, copyColor, extra, linkLabel, linkMsg, linkColor, linkHover, imgBg, img, imgAlt, glow }) {
  return (
    <Box component="article" sx={{ overflow: 'hidden', borderRadius: '1.8rem', bgcolor: bg, color: fg, '&:hover img': { transform: 'scale(1.035)' } }}>
      <Box sx={{ display: 'grid', minHeight: 420, gridTemplateColumns: { xs: '1fr', md: '.8fr 1.2fr' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', p: { xs: 3.5, sm: 4.5, lg: 5 } }}>
          <Box sx={{ width: 48, height: 48, borderRadius: 4, bgcolor: iconBg, color: iconColor, display: 'grid', placeItems: 'center' }}>{icon}</Box>
          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 700, letterSpacing: '.18em', color: eyebrowColor }}>{eyebrow}</Typography>
            <Typography variant="h3" sx={{ fontFamily: displayFont, fontWeight: 700, mt: 1.5, fontSize: { xs: 36, sm: 44 }, lineHeight: 0.98, letterSpacing: '-0.06em' }}>{title}</Typography>
            <Typography sx={{ mt: 2, maxWidth: 250, fontSize: 14, lineHeight: 1.7, color: copyColor }}>{copy}</Typography>
          </Box>
          <Box sx={{ mt: 3.5 }}>{extra}</Box>
          <Button component="a" href={whatsappUrl(linkMsg)} target="_blank" rel="noreferrer" endIcon={<NorthEastIcon sx={{ fontSize: 15 }} />} disableRipple
            sx={{ mt: 4, p: 0, pb: 0.75, minWidth: 0, borderRadius: 0, color: 'inherit', fontSize: 14, borderBottom: `1px solid ${linkColor}`, '&:hover': { bgcolor: 'transparent', color: linkHover, borderBottomColor: linkHover } }}>
            {linkLabel}
          </Button>
        </Box>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: 330, p: { xs: 2, sm: 3 }, bgcolor: imgBg }}>
          {glow && <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 45%, rgba(195,123,255,.35), transparent 61%)' }} />}
          <Box component="img" src={img} alt={imgAlt} sx={{ position: 'relative', width: '100%', height: '100%', maxHeight: 490, objectFit: 'contain', transition: 'transform .7s' }} />
        </Box>
      </Box>
    </Box>
  );
}

function Creations() {
  return (
    <Box id="creations" sx={{ bgcolor: colors.sand, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 10, sm: 14 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'flex-end' }} spacing={3} sx={{ mb: { xs: 5.5, sm: 7 } }}>
          <Box>
            <Eyebrow color="#6b35a0">THE GOOD STUFF</Eyebrow>
            <Heading sx={{ mt: 1.5, fontSize: 'clamp(2.7rem,5vw,4.6rem)', lineHeight: 0.97, letterSpacing: '-0.065em' }}>
              Made to be<br />unmistakably yours.
            </Heading>
          </Box>
          <Typography sx={{ maxWidth: 350, fontSize: 15, lineHeight: 1.75, color: '#6d6371' }}>
            Pick a favourite, bring an idea, or tell us who it’s for. We’ll help you make it personal.
          </Typography>
        </Stack>

        <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', lg: '1.08fr .92fr' } }}>
          <ProductCard
            bg="#55238b" fg="#fff" iconBg="#f5df4e" iconColor="#39224a" icon={<CheckroomIcon />}
            eyebrow="01 / WEAR YOUR IDEA" eyebrowColor="#efdc72" title={<>Custom<br />T-shirts</>}
            copy="Put your art, your favourite thing, your whole energy on a tee." copyColor="rgba(255,255,255,.75)"
            extra={<Stack spacing={1.25} sx={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.9)' }}>
              {['Breathable fabric', 'Long-lasting print', 'Premium quality'].map((t) => (
                <Stack key={t} direction="row" alignItems="center" spacing={1}><CheckIcon sx={{ fontSize: 14, color: '#f6df51' }} /><span>{t}</span></Stack>
              ))}
            </Stack>}
            linkLabel="Ask about a T-shirt" linkMsg="Hi Jeyvar Prints! I would like to enquire about a custom printed T-shirt."
            linkColor="rgba(255,255,255,.4)" linkHover="#f5df4e"
            imgBg="#32134f" img={shirtArtwork} imgAlt="Jeyvar Prints custom purple printed T-shirts" glow
          />
          <ProductCard
            bg={colors.yellow} fg={colors.ink} iconBg={colors.ink} iconColor="#f5df4e" icon={<AutoAwesomeIcon fontSize="small" />}
            eyebrow="02 / KEEP THEM CLOSE" eyebrowColor="#71570a" title={<>Photo<br />clocks</>}
            copy="Make family photos part of the everyday, not just the camera roll." copyColor="#504329"
            extra={<Box sx={{ border: '1px solid rgba(43,25,62,.2)', borderRadius: 99, px: 1.75, py: 1, fontSize: 11, fontWeight: 700, color: '#38294b' }}>PERSONALIZED WITH YOUR PHOTOS</Box>}
            linkLabel="Ask about a photo clock" linkMsg="Hi Jeyvar Prints! I would like to enquire about a personalized photo clock."
            linkColor="rgba(60,43,72,.35)" linkHover={colors.purple}
            imgBg="#f9e98c" img={photoClockArtwork} imgAlt="Personalized photo clock surrounded by family photos"
          />
        </Box>
      </Box>
    </Box>
  );
}

/* ------------------------------- How it works ------------------------------ */
const STEPS = [
  ['01', 'Tell us the story', 'A name, a photo, a sketch, a favourite character. Start with whatever makes it yours.'],
  ['02', 'Let’s shape the details', 'Message us on WhatsApp to talk through the personal touches for your T-shirt or photo clock.'],
  ['03', 'Made for you, sent to you', 'Your custom piece, made with care in Aralvaimozhi. All-India shipping is available.'],
];

function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ position: 'relative', overflow: 'hidden', bgcolor: colors.ink, color: '#f8f3e4', px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 10, sm: 14 } }}>
      <Box sx={{ pointerEvents: 'none', position: 'absolute', top: 0, right: -80, width: 420, height: 420, borderRadius: '50%', bgcolor: '#682ca4', opacity: 0.25, filter: 'blur(64px)' }} />
      <Box sx={{ position: 'relative', maxWidth: 1320, mx: 'auto', display: 'grid', gap: { xs: 6, lg: 10 }, gridTemplateColumns: { xs: '1fr', lg: '.8fr 1.2fr' } }}>
        <Box>
          <Eyebrow color="#f0d94b">A SIMPLE LITTLE PROCESS</Eyebrow>
          <Heading sx={{ mt: 2, maxWidth: 450, color: 'inherit', fontSize: 'clamp(2.8rem,5.5vw,5rem)', lineHeight: 0.94 }}>
            Your idea,<br />made real.
          </Heading>
          <Typography sx={{ mt: 3, maxWidth: 380, fontSize: 15, lineHeight: 1.75, color: '#d1c3d7' }}>
            No catalogue maze. Just a conversation about what you’re imagining and the people you’re making it for.
          </Typography>
          <WaButton message="Hi Jeyvar Prints! I have an idea I would love to make personal." variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}
            sx={{ mt: 4, bgcolor: '#f2dc4b', borderRadius: 99, px: 2.5, py: 1.75, fontSize: 14, transition: 'transform .2s', '&:hover': { bgcolor: '#f2dc4b', transform: 'translateY(-4px)' } }}>
            Tell us your idea
          </WaButton>
        </Box>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,.2)' }}>
          {STEPS.map(([n, title, copy]) => (
            <Box key={n} sx={{ display: 'grid', gap: 1.5, py: { xs: 3, sm: 3.5 }, borderBottom: '1px solid rgba(255,255,255,.2)', gridTemplateColumns: { xs: '58px 1fr', sm: '78px 1fr' } }}>
              <Typography sx={{ fontFamily: displayFont, pt: 0.5, fontSize: 18, fontWeight: 700, color: '#edda50' }}>{n}</Typography>
              <Box>
                <Typography variant="h3" sx={{ fontFamily: displayFont, fontSize: { xs: 22, sm: 25 }, fontWeight: 600, letterSpacing: '-0.035em' }}>{title}</Typography>
                <Typography sx={{ mt: 1, maxWidth: 480, fontSize: 14, lineHeight: 1.7, color: '#c9bbd0' }}>{copy}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ----------------------------------- About --------------------------------- */
function About() {
  return (
    <Box id="about" sx={{ bgcolor: colors.cream, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 10, sm: 14 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto', display: 'grid', alignItems: 'center', gap: 5, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        <Box sx={{ position: 'relative', width: '100%', maxWidth: 520, mx: 'auto' }}>
          <Box sx={{ position: 'absolute', top: -12, left: -12, width: 96, height: 96, borderTopLeftRadius: '2rem', borderLeft: '5px solid #edcf39', borderTop: '5px solid #edcf39' }} />
          <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '1.7rem', bgcolor: '#63289e', p: { xs: 2, sm: 3 }, boxShadow: '0 20px 50px rgba(46,28,58,.15)' }}>
            <Box component="img" src={shirtArtwork} alt="Vivid personalized T-shirt artwork from Jeyvar Prints" sx={{ display: 'block', width: '100%', height: 'auto', maxHeight: 440, objectFit: 'contain' }} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: -16, right: { xs: -8, sm: -20 }, bgcolor: '#f2d94a', color: '#332044', borderRadius: 99, px: 2, py: 1.5, fontSize: 10, fontWeight: 700, letterSpacing: '.14em' }}>
            ARALVAIMOZHI, TAMIL NADU
          </Box>
        </Box>
        <Box sx={{ pl: { md: 4, lg: 8 } }}>
          <Eyebrow color="#6b35a0">A LITTLE PLACE WITH BIG IDEAS</Eyebrow>
          <Heading sx={{ mt: 2, fontSize: 'clamp(2.8rem,5vw,4.5rem)' }}>Personal means<br />something here.</Heading>
          <Typography sx={{ mt: 3, maxWidth: 490, fontSize: 15, lineHeight: 1.75, color: '#655a6d' }}>
            Jeyvar Prints is a custom-print and personalized-gift shop in Aralvaimozhi. We make bold printed tees and photo clocks that turn your own moments and ideas into something you can hold onto.
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 490, fontSize: 15, lineHeight: 1.75, color: '#655a6d' }}>
            It could be for someone you love, or simply a way to show the world what you’re into. Either way, it starts with your idea.
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 4 }}>
            {['CUSTOM T-SHIRTS', 'PHOTO CLOCKS', 'ALL-INDIA SHIPPING'].map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" sx={{ borderColor: '#d7c9df', color: '#55445f', fontSize: 9, fontWeight: 700, letterSpacing: '.13em' }} />
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
    <Box sx={{ bgcolor: colors.sand, px: { xs: 2.5, sm: 4, lg: 6 }, py: { xs: 8, sm: 10 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto', overflow: 'hidden', borderRadius: '2rem', bgcolor: '#e9dff3', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' } }}>
        <Box sx={{ p: { xs: 4, sm: 6, lg: 8 } }}>
          <Eyebrow color={colors.purple}>THERE’S A GIFT IN THAT IDEA</Eyebrow>
          <Heading sx={{ mt: 2, maxWidth: 550, fontSize: 'clamp(2.8rem,5vw,4.7rem)', lineHeight: 0.94 }}>
            Make their<br />everyday a little<br /><Box component="span" sx={{ color: '#7134a7' }}>more personal.</Box>
          </Heading>
          <Typography sx={{ mt: 2.5, maxWidth: 410, fontSize: 14, lineHeight: 1.7, color: '#62546d' }}>
            Send a photo. Share a design idea. Let’s make something that feels like it could only belong to them.
          </Typography>
          <WaButton message="Hi Jeyvar Prints! I am looking for a personalized gift and would love to discuss an idea." variant="contained" endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
            sx={{ mt: 3.5, minHeight: 50, px: 3, borderRadius: 99, fontSize: 14, bgcolor: colors.ink, transition: 'all .2s', '&:hover': { bgcolor: colors.purple, transform: 'translateY(-4px)' } }}>
            Start a WhatsApp conversation
          </WaButton>
        </Box>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', bgcolor: '#f2d94a', p: 2.5, minHeight: { xs: 300, sm: 420 } }}>
          <Box sx={{ position: 'absolute', top: -64, right: -64, width: 224, height: 224, borderRadius: '50%', border: '28px solid rgba(231,167,197,.8)' }} />
          <Box sx={{ position: 'relative', width: 'min(70%, 300px)', transform: 'rotate(4deg)', overflow: 'hidden', borderRadius: '1.3rem', border: '7px solid #f7f4e7', bgcolor: '#391b54', boxShadow: '0 24px 35px rgba(43,25,62,.25)' }}>
            <Box component="img" src={photoClockArtwork} alt="A photo clock is a personal gift for the everyday" sx={{ display: 'block', width: '100%', height: 'auto' }} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: { xs: 28, sm: 44 }, left: { xs: 20, sm: 40 }, transform: 'rotate(-7deg)', bgcolor: colors.pink, color: '#fff', borderRadius: 99, px: 2, py: 1, fontSize: 10, fontWeight: 700, letterSpacing: '.12em' }}>
            JUST ADD YOUR PHOTOS
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
    <Box component="footer" id="contact" sx={{ bgcolor: colors.ink, color: '#f6f0e4', px: { xs: 2.5, sm: 4, lg: 6 }, pt: { xs: 7, sm: 8 }, pb: { xs: 14, sm: 6 } }}>
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <Box sx={{ display: 'grid', gap: 5, pb: 5.5, borderBottom: '1px solid rgba(255,255,255,.2)', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, alignItems: { md: 'end' } }}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: '#f2d94a', color: colors.ink, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 15, letterSpacing: '-0.1em' }}>JP</Box>
              <Box>
                <Typography sx={{ fontFamily: displayFont, fontWeight: 700, fontSize: 18, letterSpacing: '-0.04em' }}>JEYVAR PRINTS</Typography>
                <Typography sx={{ fontSize: 9, fontWeight: 600, letterSpacing: '.2em', color: '#c3b5cb' }}>MAKE IT YOURS</Typography>
              </Box>
            </Stack>
            <Typography sx={{ mt: 2.5, maxWidth: 420, fontSize: 14, lineHeight: 1.7, color: '#c9bbd0' }}>
              Personalized gifts and custom prints, made with your ideas in Aralvaimozhi.
            </Typography>
          </Box>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            <WaButton message="Hi Jeyvar Prints! I would like to enquire about a custom print." variant="contained" startIcon={<WhatsAppIcon />}
              sx={{ bgcolor: '#f2d94a', color: colors.ink, borderRadius: 99, px: 2.5, py: 1.5, fontSize: 14, transition: 'transform .2s', '&:hover': { bgcolor: '#f2d94a', transform: 'translateY(-4px)' } }}>
              WhatsApp us
            </WaButton>
            <Button component="a" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" variant="outlined" endIcon={<NorthEastIcon sx={{ fontSize: 15 }} />}
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)', borderRadius: 99, px: 2.5, py: 1.5, fontSize: 14, '&:hover': { borderColor: '#f2d94a', color: '#f2d94a', bgcolor: 'transparent' } }}>
              Instagram
            </Button>
          </Stack>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={2} sx={{ pt: 3, fontSize: 12, color: '#bcaec5' }}>
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
      sx={{ position: 'fixed', zIndex: 1300, bottom: { xs: 16, sm: 24 }, right: { xs: 16, sm: 24 }, bgcolor: '#6e2eaa', border: '1px solid rgba(255,255,255,.25)', borderRadius: 99, px: { xs: 2, sm: 2.5 }, py: 1.75, fontSize: 12, boxShadow: '0 10px 30px rgba(43,25,62,.35)', transition: 'all .2s', '&:hover': { bgcolor: '#542186', transform: 'translateY(-4px)' } }}>
      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>ENQUIRE ON WHATSAPP</Box>
      <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>WHATSAPP</Box>
    </Button>
  );
}

export default function App() {
  return (
    <Box component="main" sx={{ overflow: 'hidden' }}>
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
