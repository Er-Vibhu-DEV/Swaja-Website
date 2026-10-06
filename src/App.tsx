import { useEffect, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HubIcon from '@mui/icons-material/Hub';
import MenuIcon from '@mui/icons-material/Menu';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

type SectionId = 'home' | 'about' | 'vision' | 'careers' | 'contact';

const navItems: { label: string; id: SectionId }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Vision', id: 'vision' },
  { label: 'Careers', id: 'careers' },
  { label: 'Contact', id: 'contact' },
];

const disciplines = [
  { title: 'Robotics', body: 'Intelligent robotic systems designed for practical applications.', icon: <PrecisionManufacturingIcon /> },
  { title: 'Home Automation', body: 'Smart and connected automation solutions for modern environments.', icon: <HomeWorkIcon /> },
  { title: 'Custom Machines', body: 'Purpose-built machines developed around specific requirements.', icon: <EngineeringIcon /> },
  { title: 'Engineering & Automation', body: 'Integrated software, electronics, control systems and automation.', icon: <HubIcon /> },
];

const approach = ['Understand', 'Design', 'Engineer', 'Build', 'Innovate'];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', overflow: 'hidden' }}>
       <Box
         component="header"
         sx={{
           position: 'fixed',
           top: 0,
           left: 0,
           right: 0,
           zIndex: theme.zIndex.appBar,
           bgcolor: scrolled ? 'rgba(245,251,254,0.75)' : 'transparent',
           borderBottom: scrolled ? 1 : 0,
           borderColor: 'divider',
           backdropFilter: scrolled ? 'blur(10px)' : 'none',
           WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
           transition: 'all 240ms ease',
         }}
       >
          <Container maxWidth="xl">
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: { xs: 72, md: 88 } }}>
              <Button onClick={() => goTo('home')} sx={{ p: 0, minWidth: 0, color: 'text.primary', '&:hover': { bgcolor: 'transparent' } }}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box component="img" src="/favicon.svg" alt="Swaja Robotics Logo" sx={{ width: 28, height: 28, borderRadius: 1 }} />
                  <Typography sx={{ fontSize: { xs: '0.76rem', md: '0.88rem' }, letterSpacing: '0.16em', fontWeight: 700 }}>SWAJA ROBOTICS</Typography>
                </Stack>
              </Button>
              <Stack direction="row" spacing={{ md: 3, lg: 5 }} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => <Link key={item.id} component="button" onClick={() => goTo(item.id)} underline="none" sx={{ color: 'text.primary', fontSize: '0.83rem', '&:hover': { color: 'primary.main' } }}>{item.label}</Link>)}
                <Button variant="outlined" color="primary" onClick={() => goTo('contact')} endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}>Start a conversation</Button>
              </Stack>
              <IconButton onClick={() => setDrawerOpen(true)} aria-label="Open navigation" sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}><MenuIcon /></IconButton>
            </Stack>
          </Container>
        </Box>

        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: 'min(88vw, 360px)', bgcolor: 'background.default', p: 3 } }}>
          <Stack spacing={3} sx={{ height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center"><Typography variant="overline" color="primary.main">Navigation</Typography><IconButton onClick={() => setDrawerOpen(false)} aria-label="Close navigation"><CloseIcon /></IconButton></Stack>
            <Divider />
            <Stack spacing={1}>
              {navItems.map((item) => <Button key={item.id} onClick={() => goTo(item.id)} sx={{ justifyContent: 'flex-start', py: 1.5, color: 'text.primary', fontSize: '1.4rem', fontWeight: 400 }}>{item.label}</Button>)}
            </Stack>
            <Box sx={{ mt: 'auto', p: 2, bgcolor: 'primary.main', color: 'common.white' }}><Typography variant="body2">Engineering beyond limits.</Typography></Box>
          </Stack>
        </Drawer>

        <Box component="main">
          <Box id="home" component="section" sx={{ minHeight: { xs: 650, md: 780 }, bgcolor: 'background.default', color: 'text.primary', position: 'relative', display: 'flex', alignItems: 'center', pt: { xs: '72px', md: '88px' } }}>
            <Container maxWidth="xl" sx={{ position: 'relative', pt: { xs: 0, md: 0 }, pb: { xs: 7, md: 10 }, display: { xs: 'flex', md: 'block' }, flexDirection: 'column' }}>
              <Box component="img" src="/swaja-hero.webp" alt="Robotic arm and custom machine in an engineering laboratory" sx={{ position: { xs: 'relative', md: 'absolute' }, right: { md: 0 }, top: { md: '50%' }, transform: { md: 'translateY(-50%)' }, width: { xs: '100%', md: '57%' }, height: { xs: 300, sm: 390, md: 580 }, order: { xs: 2, md: 0 }, objectFit: 'cover', borderRadius: 3, boxShadow: '0 24px 60px rgba(45,125,159,0.18)' }} />
              <Box sx={{ position: 'relative', zIndex: 1, maxWidth: { xs: '100%', md: 620 }, pt: { xs: 2, md: 4 }, pb: { xs: 5, md: 10 }, order: { xs: 1, md: 0 } }}>
                <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 3 }}><Box sx={{ width: 34, height: 1, bgcolor: 'secondary.main' }} /><Typography variant="overline" sx={{ color: 'primary.main' }}>Robotics · Automation · Engineering</Typography></Stack>
                <Typography component="h1" variant="h1" sx={{ maxWidth: 820 }}>Engineering<br /><Box component="span" sx={{ color: 'primary.main' }}>Beyond Limits.</Box></Typography>
                <Typography sx={{ maxWidth: 540, mt: 4, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.16rem' } }}>We design and develop innovative robotics, home automation solutions, and custom machines that bring intelligent technology into everyday life.</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5, alignItems: { xs: 'stretch', sm: 'center' } }}>
                  <Button variant="contained" color="primary" onClick={() => goTo('about')} endIcon={<ArrowOutwardIcon />}>Explore our vision</Button>
                  <Button variant="text" onClick={() => goTo('contact')} sx={{ color: 'primary.dark', justifyContent: 'flex-start' }}>Contact us <Box component="span" sx={{ ml: 1, color: 'secondary.main' }}>↗</Box></Button>
                </Stack>
              </Box>
              <Typography sx={{ position: 'absolute', right: { xs: 24, md: 48 }, bottom: { xs: 28, md: 36 }, writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'primary.main', opacity: 0.65 }}>SWJ / 2021 — PRESENT</Typography>
            </Container>
          </Box>

          <Container maxWidth="xl">
            <Box id="about" component="section" sx={{ py: { xs: 10, md: 18 } }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 12 }} alignItems="center">
                <Box sx={{ width: { xs: '100%', md: '46%' }, position: 'relative', p: { xs: 1, md: 2 }, bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 3, boxShadow: '0 18px 45px rgba(45,125,159,0.12)' }}><Box component="img" src="/swaja-about.webp" alt="Robotic arm working beside electronics on an engineering workbench" sx={{ width: '100%', display: 'block', aspectRatio: '1 / 1.1', objectFit: 'cover', borderRadius: 2 }} /><Box sx={{ position: 'absolute', bottom: -20, right: -20, width: 92, height: 92, bgcolor: 'secondary.light', display: 'grid', placeItems: 'center', color: 'primary.dark', borderRadius: 2 }}><AutoAwesomeIcon sx={{ fontSize: 30 }} /></Box></Box>
                <Box sx={{ flex: 1 }}><Typography variant="overline" color="primary.main">01 / About us</Typography><Typography variant="h2" sx={{ mt: 2, maxWidth: 650 }}>Engineering the future of automation.</Typography><Typography variant="body1" color="text.secondary" sx={{ mt: 4, maxWidth: 520 }}>Swaja Robotics Pvt. Ltd. is a technology company focused on robotics, home automation, and custom machine development.</Typography><Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 520 }}>We combine software, electronics, automation, and robotics to create practical technology solutions designed around specific requirements.</Typography><Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 520 }}>Our goal is to push the boundaries of what is possible through innovative engineering and intelligent automation.</Typography></Box>
              </Stack>
            </Box>

            <Box component="section" sx={{ py: { xs: 10, md: 14 }, borderTop: 1, borderColor: 'divider' }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between" sx={{ mb: 7 }}><Box><Typography variant="overline" color="primary.main">02 / What we do</Typography><Typography variant="h3" sx={{ mt: 2 }}>Ideas into intelligent systems.</Typography></Box><Typography color="text.secondary" sx={{ maxWidth: 360, alignSelf: 'flex-end' }}>Different disciplines. One focused approach to useful, considered technology.</Typography></Stack>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, borderTop: 1, borderLeft: 1, borderColor: 'divider' }}>{disciplines.map((item, index) => <Box key={item.title} sx={{ p: { xs: 3, md: 4 }, minHeight: 270, borderRight: 1, borderBottom: 1, borderColor: 'divider', transition: 'background 240ms ease', '&:hover': { bgcolor: 'rgba(12,108,112,0.06)' } }}><Box sx={{ color: index % 2 ? 'secondary.main' : 'primary.main', mb: 7 }}>{item.icon}</Box><Typography variant="h6" sx={{ fontWeight: 500 }}>{item.title}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>{item.body}</Typography></Box>)}</Box>
            </Box>

            <Box component="section" sx={{ py: { xs: 10, md: 14 } }}><Stack direction={{ xs: 'column', md: 'row' }} spacing={5} justifyContent="space-between"><Box><Typography variant="overline" color="primary.main">03 / Our approach</Typography><Typography variant="h3" sx={{ mt: 2, maxWidth: 560 }}>Built around the<br />right questions.</Typography></Box><Typography color="text.secondary" sx={{ maxWidth: 360 }}>Every project begins by understanding the requirement, then shaping the right path from first thought to finished machine.</Typography></Stack><Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(5, 1fr)' }, mt: 9, borderTop: 1, borderColor: 'divider' }}>{approach.map((step, index) => <Box key={step} sx={{ pt: 2.5, pb: { xs: 2, sm: 0 }, pr: 2, borderBottom: { xs: 1, sm: 0 }, borderColor: 'divider', position: 'relative' }}><Typography sx={{ color: 'secondary.main', fontSize: '0.78rem', mb: 5 }}>0{index + 1}</Typography><Typography sx={{ fontSize: { xs: '1.35rem', md: '1.05rem' }, fontWeight: 500 }}>{step}</Typography>{index < approach.length - 1 && <ArrowOutwardIcon sx={{ display: { xs: 'none', sm: 'block' }, position: 'absolute', right: 16, top: 20, fontSize: 18, color: 'primary.main' }} />}</Box>)}</Box></Box>
          </Container>

          <Box id="vision" component="section" sx={{ bgcolor: 'secondary.light', color: 'text.primary', overflow: 'hidden', py: { xs: 5, md: 7 } }}><Container maxWidth="xl"><Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 10 }} alignItems="center"><Box sx={{ flex: 1, py: { md: 6 } }}><Typography variant="overline" sx={{ color: 'primary.dark' }}>04 / Our vision</Typography><Typography variant="h2" sx={{ maxWidth: 700, mt: 4 }}>Engineering<br /><Box component="span" sx={{ color: 'primary.main' }}>Beyond Limits.</Box></Typography><Typography sx={{ maxWidth: 510, mt: 5, color: 'text.secondary', fontSize: '1.1rem' }}>We believe technology should not be limited by conventional solutions.</Typography><Typography sx={{ maxWidth: 510, mt: 2, color: 'text.secondary' }}>Our vision is to develop innovative robotics and automation systems that make everyday environments smarter, more connected, and more efficient.</Typography></Box><Box sx={{ flex: 1, width: '100%', p: { xs: 1, md: 2 }, bgcolor: 'background.paper', borderRadius: 3, boxShadow: '0 18px 45px rgba(45,125,159,0.16)' }}><Box component="img" src="/swaja-vision.webp" alt="Close-up of precision robotic mechanisms with cyan interface light" sx={{ display: 'block', width: '100%', height: { xs: 300, md: 480 }, objectFit: 'cover', borderRadius: 2 }} /></Box></Stack></Container></Box>

          <Container maxWidth="xl">
            <Box id="careers" component="section" sx={{ py: { xs: 10, md: 18 } }}><Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 14 }}><Box sx={{ flex: 1 }}><Typography variant="overline" color="primary.main">05 / Careers</Typography><Typography variant="h2" sx={{ mt: 2 }}>Build the<br />future with us.</Typography></Box><Box sx={{ flex: 1, pt: { md: 5 } }}><Typography variant="body1" color="text.secondary">At Swaja Robotics, we believe the future of technology is built by people who are curious, creative, and passionate about solving real-world problems.</Typography><Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>If you are interested in robotics, automation, electronics, software, or innovative engineering, we would love to hear from you.</Typography><Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={() => goTo('contact')} endIcon={<ArrowOutwardIcon />}>Get in touch</Button></Box></Stack></Box>
            <Box id="contact" component="section" sx={{ py: { xs: 10, md: 16 }, borderTop: 1, borderColor: 'divider' }}><Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 6, lg: 16 }}><Box sx={{ flex: 1 }}><Typography variant="overline" color="primary.main">06 / Contact us</Typography><Typography variant="h2" sx={{ mt: 2, maxWidth: 640 }}>Let's build the future together.</Typography><Typography color="text.secondary" sx={{ mt: 4, maxWidth: 430 }}>Have an automation idea or a custom machine requirement? Get in touch with us to discuss your requirements.</Typography></Box><Stack spacing={4} sx={{ minWidth: { lg: 330 } }}><Box><Typography variant="overline" color="text.secondary">Email</Typography><Link href="mailto:swajarobotics@swaja.com" underline="hover" color="text.primary" sx={{ display: 'block', mt: 1, fontSize: '1.1rem' }}>swajarobotics@swaja.com</Link></Box><Box><Typography variant="overline" color="text.secondary">Location</Typography><Typography sx={{ mt: 1, maxWidth: 260 }}>Rajendrapuram, Ganga Nagar,<br />Meerut, Uttar Pradesh, India</Typography></Box><Box><Typography variant="overline" color="text.secondary">Website</Typography><Link href="https://swaja.com" target="_blank" rel="noreferrer" underline="hover" color="text.primary" sx={{ display: 'block', mt: 1, fontSize: '1.1rem' }}>swaja.com ↗</Link></Box><Button href="mailto:swajarobotics@swaja.com" variant="contained" color="secondary" endIcon={<ArrowOutwardIcon />} sx={{ alignSelf: 'flex-start' }}>Start a conversation</Button></Stack></Stack></Box>
          </Container>
        </Box>

        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'common.white', py: 5 }}><Container maxWidth="xl"><Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between" alignItems={{ md: 'center' }}><Box><Typography sx={{ fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.85rem' }}>SWAJA ROBOTICS</Typography><Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,0.55)' }}>Engineering Beyond Limits</Typography></Box><Stack direction="row" spacing={3} flexWrap="wrap">{navItems.slice(1).map((item) => <Link key={item.id} component="button" onClick={() => goTo(item.id)} underline="none" sx={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.82rem', '&:hover': { color: 'secondary.main' } }}>{item.label}</Link>)}</Stack><IconButton onClick={() => goTo('home')} aria-label="Back to top" sx={{ color: 'secondary.main', border: 1, borderColor: 'rgba(214,167,86,0.5)' }}><ArrowUpwardIcon fontSize="small" /></IconButton></Stack><Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.14)' }} /><Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)' }}>© 2021 Swaja Robotics Pvt. Ltd. All rights reserved.</Typography></Container></Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
