import { useEffect, useState } from 'react';
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

type SectionId = 'about' | 'careers' | 'contact';

const navItems: { label: string; id: SectionId }[] = [
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
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections: SectionId[] = ['about', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

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
              <Button onClick={() => goTo('about')} sx={{ p: 0, minWidth: 0, color: '#000000', '&:hover': { bgcolor: 'transparent' } }}>
                <Box component="img" src="/logo.svg" alt="Swaro Logo" sx={{ height: { xs: 28, md: 36 }, width: 'auto', display: 'block' }} />
              </Button>
              <Stack direction="row" spacing={{ md: 4, lg: 6 }} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Link
                      key={item.id}
                      component="button"
                      onClick={() => { goTo(item.id); setActiveSection(item.id); }}
                      underline="none"
                      sx={{
                        color: isActive ? 'primary.main' : 'text.primary',
                        fontSize: { md: '1.1rem', lg: '1.25rem' },
                        fontWeight: isActive ? 700 : 500,
                        transform: isActive ? 'scale(1.08)' : 'scale(1)',
                        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': { color: 'primary.main', transform: 'scale(1.08)' }
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
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
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    onClick={() => { goTo(item.id); setActiveSection(item.id); }}
                    sx={{
                      justifyContent: 'flex-start',
                      py: 1.5,
                      color: isActive ? 'primary.main' : 'text.primary',
                      fontSize: isActive ? '1.5rem' : '1.3rem',
                      fontWeight: isActive ? 700 : 400
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>
            <Box sx={{ mt: 'auto', p: 2, bgcolor: 'primary.main', color: 'common.white' }}><Typography variant="body2">Engineering beyond limits.</Typography></Box>
          </Stack>
        </Drawer>

        <Box component="main">
          <Container maxWidth="xl">
            <Box id="about" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, pt: { xs: 10, md: 14 }, pb: { xs: 10, md: 18 }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                <Typography variant="overline" color="primary.main">01 / About us</Typography>
                <Typography variant="h2" sx={{ mt: 2, mx: 'auto', color: '#000000' }}>Bridging technology for India's future.</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 4, fontSize: { xs: '1.05rem', md: '1.2rem' }, lineHeight: 1.8 }}>
                  Swaja Robotics was founded with the insight that there is a large need to make the technology accessible to the next Billion people in India. This requires innovation in both device and content. Swaja Robotics is focused on creating these bridge devices.
                </Typography>
              </Box>
            </Box>

            <Box id="careers" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, pt: { xs: 3, md: 4 }, pb: { xs: 10, md: 18 }, borderTop: 1, borderColor: 'divider' }}>
              <Box sx={{ mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="overline" color="primary.main">02 / Careers</Typography>
                <Typography variant="h2" sx={{ mt: 2, maxWidth: 640, mx: 'auto', color: '#000000' }}>Build the future with us.</Typography>
                <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>At Swaja Robotics, we believe the future of technology is built by people who are curious, creative, and passionate about solving real-world problems. Explore our open positions below.</Typography>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
                {careerOpenings.map((job) => (
                  <Box
                    key={job.title}
                    sx={{
                      p: 4,
                      bgcolor: 'background.paper',
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 5,
                      boxShadow: '0 12px 35px rgba(45,125,159,0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-6px) scale(1.015)',
                        boxShadow: '0 20px 45px rgba(45,125,159,0.16)',
                        borderColor: 'primary.light',
                      }
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#2696C2', mb: 1 }}>{job.title}</Typography>
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

            <Box id="contact" component="section" sx={{ scrollMarginTop: { xs: '80px', md: '100px' }, pt: { xs: 3, md: 4 }, pb: { xs: 10, md: 16 }, borderTop: 1, borderColor: 'divider' }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 10 }} alignItems="center" sx={{ mb: 8 }}>
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography variant="overline" color="primary.main">03 / Contact us</Typography>
                  <Typography variant="h2" sx={{ mt: 2, maxWidth: 640, color: '#000000' }}>Let's build the future together.</Typography>
                  <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 530 }}>Have an automation idea or a custom machine requirement? Get in touch with us at any of our offices below.</Typography>
                </Box>
                <Box sx={{ flex: 1, width: '100%' }}>
                  <Box sx={{ width: '100%', height: { xs: 260, md: 300 }, borderRadius: 5, overflow: 'hidden', border: 1, borderColor: 'divider', boxShadow: '0 12px 35px rgba(45,125,159,0.08)' }}>
                    <Box
                      component="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.954!2d77.7440385!3d29.0050402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b00597e985d%3A0xbd895d42707d62ed!2sSwaja%20Robotics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                      sx={{ width: '100%', height: '100%', border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </Box>
                </Box>
              </Stack>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, gap: { xs: 3, md: 4 }, alignItems: 'stretch' }}>

                {/* Meerut */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, boxShadow: '0 14px 40px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', minHeight: { xs: 220, md: 240 }, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 50px rgba(45,125,159,0.15)', borderColor: 'primary.main' } }}>
                  <Typography sx={{ textAlign: 'center', fontSize: { xs: '1.25rem', md: '1.4rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'text.primary', mb: 1.5 }}>
                    Meerut Office
                  </Typography>
                  <Box sx={{ width: 35, height: 2.5, bgcolor: 'primary.main', borderRadius: 10, mx: 'auto', mb: 2 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.9rem', md: '0.95rem' }, lineHeight: 1.6, textAlign: 'center' }}>
                    B-8 Rajender Puram, Mawana Road,<br />Meerut 250001, UP, India
                  </Typography>
                  <Typography sx={{ mt: 'auto', pt: 2, textAlign: 'center', fontSize: '0.9rem', color: 'text.secondary' }}>
                    Email: <Link href="mailto:Info@swaja.com" underline="hover" sx={{ color: '#2563eb', fontWeight: 600 }}>Info@swaja.com</Link>
                  </Typography>
                </Box>

                {/* Bangalore */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, boxShadow: '0 14px 40px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', minHeight: { xs: 220, md: 240 }, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 50px rgba(45,125,159,0.15)', borderColor: 'primary.main' } }}>
                  <Typography sx={{ textAlign: 'center', fontSize: { xs: '1.25rem', md: '1.4rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'text.primary', mb: 1.5 }}>
                    Bangalore Office
                  </Typography>
                  <Box sx={{ width: 35, height: 2.5, bgcolor: 'primary.main', borderRadius: 10, mx: 'auto', mb: 2 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.9rem', md: '0.95rem' }, lineHeight: 1.6, textAlign: 'center' }}>
                    4th Floor, 331, 5B Rd, EPIP Zone, Whitefield,<br />Bengaluru, Karnataka 560066
                  </Typography>
                  <Typography sx={{ mt: 'auto', pt: 2, textAlign: 'center', fontSize: '0.9rem', color: 'text.secondary' }}>
                    Email: <Link href="mailto:Info@swaja.com" underline="hover" sx={{ color: '#2563eb', fontWeight: 600 }}>Info@swaja.com</Link>
                  </Typography>
                </Box>

                {/* Hyderabad */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 4, boxShadow: '0 14px 40px rgba(45,125,159,0.08)', display: 'flex', flexDirection: 'column', minHeight: { xs: 220, md: 240 }, transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 20px 50px rgba(45,125,159,0.15)', borderColor: 'primary.main' } }}>
                  <Typography sx={{ textAlign: 'center', fontSize: { xs: '1.25rem', md: '1.4rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'text.primary', mb: 1.5 }}>
                    Hyderabad Office
                  </Typography>
                  <Box sx={{ width: 35, height: 2.5, bgcolor: 'primary.main', borderRadius: 10, mx: 'auto', mb: 2 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.9rem', md: '0.95rem' }, lineHeight: 1.6, textAlign: 'center' }}>
                    Plot No 1339, Road No. 67 Jubilee Hills,<br />Hyderabad, Telangana 500033, India
                  </Typography>
                  <Typography sx={{ mt: 'auto', pt: 2, textAlign: 'center', fontSize: '0.9rem', color: 'text.secondary' }}>
                    Email: <Link href="mailto:Info@swaja.com" underline="hover" sx={{ color: '#2563eb', fontWeight: 600 }}>Info@swaja.com</Link>
                  </Typography>
                </Box>

              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'common.white', py: 5 }}>
          <Container maxWidth="xl">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' }, alignItems: 'center', gap: 3 }}>

              {/* Company */}
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography sx={{ fontWeight: 800, letterSpacing: '0.14em', fontSize: '1rem' }}>
                  Swaja Robotics Pvt. Ltd.
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,0.55)' }}>
                  Engineering Beyond Limits
                </Typography>
              </Box>

              {/* Navigation */}
              <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                {navItems.map((item) => (
                  <Link key={item.id} component="button" onClick={() => goTo(item.id)} underline="none"
                    sx={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.2s ease', '&:hover': { color: 'secondary.main' } }}>
                    {item.label}
                  </Link>
                ))}
              </Stack>

              {/* Back to top */}
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <IconButton onClick={() => goTo('about')} aria-label="Back to top"
                  sx={{ color: 'secondary.main', border: 1, borderColor: 'rgba(214,167,86,0.5)', width: 42, height: 42, '&:hover': { borderColor: 'secondary.main', bgcolor: 'rgba(214,167,86,0.08)' } }}>
                  <ArrowUpwardIcon fontSize="small" />
                </IconButton>
              </Box>

            </Box>
            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.14)' }} />
            <Box sx={{ width: '100%', textAlign: 'center', mt: 4 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)' }}>
                © 2021 Swaja Robotics Pvt. Ltd. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
