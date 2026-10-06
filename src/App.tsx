import { useEffect, useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuIcon from '@mui/icons-material/Menu';
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

type SectionId = 'home' | 'about' | 'careers' | 'contact';

const navItems: { label: string; id: SectionId }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Careers', id: 'careers' },
  { label: 'Contact', id: 'contact' },
];

const careerOpenings = [
  {
    title: 'Software Engineer',
    location: 'Meerut',
    responsibilities: [
      'Strong CS fundamentals in algorithms, data structures, and systems programming. Passion for coding, creating complex systems from scratch and designing for scale.',
      'Knowledge of large scale distributed systems, system coding using Java, Rust, or C++. Experience building high-performance solutions.'
    ],
    skills: '2+ years of key contribution to building systems or sophisticated products.'
  },
  {
    title: 'Application Developer',
    location: 'Meerut',
    responsibilities: [
      'Design, build, and maintain high performance, reusable, and reliable application code.',
      'Collaborate with cross-functional teams to define, design, and ship new features for robotics and automation interfaces.'
    ],
    skills: 'Proficiency in modern application frameworks, UI/UX principles, and API integrations.'
  },
  {
    title: 'Embedded Engineer',
    location: 'Meerut',
    responsibilities: [
      'Develop firmware and embedded software for advanced robotic systems and custom controllers.',
      'Interface sensors, actuators, and communication protocols (UART, SPI, I2C, CAN).'
    ],
    skills: 'Strong C/C++ programming, debugging skills, and hands-on microcontrollers experience.'
  },
  {
    title: 'Electronics Engineer',
    location: 'Meerut',
    responsibilities: [
      'Design and test schematic PCBs, circuit boards, power electronics, and control systems.',
      'Perform hardware testing, circuit simulation, and validation for automated hardware.'
    ],
    skills: 'Experience with PCB design tools (Altium, KiCad) and hardware testing equipment.'
  },
  {
    title: 'New Product Design',
    location: 'Meerut',
    responsibilities: [
      'Conceptualize and engineer innovative products from initial idea to prototype and production.',
      'Integrate mechanical housing, electronics packaging, and ergonomic user-focused design.'
    ],
    skills: 'Proficiency in CAD modeling, prototyping, material science, and manufacturing processes.'
  },
  {
    title: 'Mechanical Engineer',
    location: 'Meerut',
    responsibilities: [
      'Design mechanical structures, linkages, and housings for robotic arms and custom machines.',
      'Perform structural analysis, thermal management, and kinematic simulations.'
    ],
    skills: 'Expertise in SolidWorks/Fusion 360, DFM (Design for Manufacturing), and mechanical assembly.'
  }
];

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
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ height: { xs: 80, md: 100 } }}>
              <Button onClick={() => goTo('home')} sx={{ p: 0, minWidth: 0, color: 'text.primary', '&:hover': { bgcolor: 'transparent' } }}>
                <Box component="img" src="/logo.svg" alt="Swaja Robotics Logo" sx={{ height: { xs: 52, md: 72 }, width: 'auto', display: 'block' }} />
              </Button>
              <Stack direction="row" spacing={{ md: 3, lg: 5 }} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => <Link key={item.id} component="button" onClick={() => goTo(item.id)} underline="none" sx={{ color: 'text.primary', fontSize: '0.83rem', '&:hover': { color: 'primary.main' } }}>{item.label}</Link>)}
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
          <Box id="home" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, minHeight: { xs: 450, md: 580 }, bgcolor: 'background.default', color: 'text.primary', position: 'relative', display: 'flex', alignItems: 'center', pt: { xs: '80px', md: '100px' } }}>
            <Container maxWidth="xl" sx={{ position: 'relative', pt: { xs: 2, md: 4 }, pb: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ position: 'relative', zIndex: 1, maxWidth: { xs: '100%', md: 900 }, pt: 0, pb: { xs: 2, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h1" sx={{ maxWidth: 900, color: '#000000' }}>Swaja <Box component="span" sx={{ color: '#ffffff', bgcolor: '#000000', px: 1.5, py: 0.5, borderRadius: 1, display: 'inline-block' }}>Robotics</Box></Typography>
                <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="center" sx={{ mt: 3, mb: 4 }}><Box sx={{ width: 34, height: 1, bgcolor: 'secondary.main' }} /><Typography variant="overline" sx={{ color: 'primary.main' }}>Robotics · Automation · Engineering</Typography></Stack>
                <Typography sx={{ maxWidth: 640, mt: 3, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.16rem' }, textAlign: 'center' }}>We design and develop innovative robotics, home automation solutions, and custom machines that bring intelligent technology into everyday life.</Typography>
              </Box>
              <Typography sx={{ position: 'absolute', right: { xs: 24, md: 48 }, bottom: { xs: 28, md: 36 }, writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'primary.main', opacity: 0.65 }}>SWJ / 2021 — PRESENT</Typography>
            </Container>
          </Box>

          <Container maxWidth="xl">
            <Box id="about" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, pt: { xs: 4, md: 6 }, pb: { xs: 10, md: 18 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                <Typography variant="overline" color="primary.main">01 / About us</Typography>
                <Typography variant="h2" sx={{ mt: 2, mx: 'auto' }}>Bridging technology for India's future.</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 4, fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.8 }}>
                  Swaja Robotics was founded with the insight that there is a large need to make the technology accessible to the next Billion people in India. This requires innovation in both device and content. Swaja Robotics is focused on creating these bridge devices.
                </Typography>
              </Box>
            </Box>

            <Box id="careers" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, py: { xs: 10, md: 18 }, borderTop: 1, borderColor: 'divider' }}>
              <Box sx={{ mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="overline" color="primary.main">02 / Careers</Typography>
                <Typography variant="h2" sx={{ mt: 2, maxWidth: 640, mx: 'auto' }}>Build the future with us.</Typography>
                <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>At Swaja Robotics, we believe the future of technology is built by people who are curious, creative, and passionate about solving real-world problems. Explore our open positions below.</Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
                {careerOpenings.map((job) => (
                  <Box key={job.title} sx={{ p: 4, bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 3, boxShadow: '0 12px 35px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#d83b72', mb: 1 }}>{job.title}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, color: 'text.secondary' }}>
                      <Box component="span" sx={{ fontSize: '0.9rem' }}>📍 {job.location}</Box>
                    </Stack>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>Role and responsibilities</Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3, color: 'text.secondary', fontSize: '0.95rem', '& li': { mb: 1.5 } }}>
                      {job.responsibilities.map((resp, i) => (
                        <Box component="li" key={i}>{resp}</Box>
                      ))}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>Desired skill set</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{job.skills}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box id="contact" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, py: { xs: 10, md: 16 }, borderTop: 1, borderColor: 'divider' }}>
              <Box sx={{ mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="overline" color="primary.main">03 / Contact us</Typography>
                <Typography variant="h2" sx={{ mt: 2, maxWidth: 640, mx: 'auto' }}>Let's build the future together.</Typography>
                <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 530, mx: 'auto' }}>Have an automation idea or a custom machine requirement? Get in touch with us at any of our offices below.</Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                <Box sx={{ p: 4, bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 3, boxShadow: '0 12px 35px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>Meerut Office</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, fontWeight: 500 }}>(R&D and Production)</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>B-8 Rajender Puram, Mawana Road,<br />Meerut 250001, Uttar Pradesh, India</Typography>
                  <Link href="mailto:Info@swaja.com" underline="hover" color="text.primary" sx={{ display: 'block', mt: 'auto', fontSize: '1rem', fontWeight: 500 }}>Info@swaja.com</Link>
                </Box>

                <Box sx={{ p: 4, bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 3, boxShadow: '0 12px 35px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>Bangalore Office</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, fontWeight: 500 }}>&nbsp;</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>4th Floor, 331, 5B Rd, EPIP Zone, Whitefield,<br />Bengaluru, Karnataka 560066</Typography>
                  <Link href="mailto:Info@swaja.com" underline="hover" color="text.primary" sx={{ display: 'block', mt: 'auto', fontSize: '1rem', fontWeight: 500 }}>Info@swaja.com</Link>
                </Box>

                <Box sx={{ p: 4, bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 3, boxShadow: '0 12px 35px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>Hyderabad Office</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, fontWeight: 500 }}>&nbsp;</Typography>
                  <Typography sx={{ mb: 3, color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>Plot No 1339, Road No. 67 Jubilee Hills,<br />Hyderabad, Telangana 500033, India</Typography>
                  <Link href="mailto:Info@swaja.com" underline="hover" color="text.primary" sx={{ display: 'block', mt: 'auto', fontSize: '1rem', fontWeight: 500 }}>Info@swaja.com</Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'common.white', py: 5 }}>
          <Container maxWidth="xl">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between" alignItems={{ md: 'center' }}>
              <Box>
                <Typography sx={{ fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.85rem' }}>SWAJA ROBOTICS</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,0.55)' }}>Engineering Beyond Limits</Typography>
              </Box>
              <Stack direction="row" spacing={3} flexWrap="wrap">
                {navItems.slice(1).map((item) => <Link key={item.id} component="button" onClick={() => goTo(item.id)} underline="none" sx={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.82rem', '&:hover': { color: 'secondary.main' } }}>{item.label}</Link>)}
              </Stack>
              <IconButton onClick={() => goTo('home')} aria-label="Back to top" sx={{ color: 'secondary.main', border: 1, borderColor: 'rgba(214,167,86,0.5)' }}>
                <ArrowUpwardIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.14)' }} />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)' }}>© 2021 Swaja Robotics Pvt. Ltd. All rights reserved.</Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
