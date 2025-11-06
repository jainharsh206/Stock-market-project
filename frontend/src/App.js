import ScrollToTop from "./ScrollToTop";

<Router>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
