import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import {
  Cake,
  Gift,
  ImageIcon,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50"
    >
      {/* GLASS CONTAINER */}
      <div className="px-6 md:px-10 py-4 rounded-3xl bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_40px_rgba(236,72,153,0.15)] flex items-center justify-between">

        {/* LEFT LOGO */}
        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-lg">
            <Cake size={24} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-black text-pink-500">
              Happy Birthday 💖
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Special Day For You 🎂
            </p>
          </div>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          <NavItem icon={<Cake size={18} />} text="Home" to="/" active={isActive("/")} />
          <NavItem icon={<ImageIcon size={18} />} text="Memories" to="/memories" active={isActive("/memories")} />
          <NavItem icon={<Gift size={18} />} text="Surprise" to="/surprise" active={isActive("/surprise")} />

        </div>

        {/* MOBILE BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 text-white shadow-lg"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 p-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/30 shadow-xl flex flex-col gap-6"
          >

            <MobileNavItem icon={<Cake size={20} />} text="Home" to="/" setOpen={setOpen} active={isActive("/")} />
            <MobileNavItem icon={<ImageIcon size={20} />} text="Memories" to="/memories" setOpen={setOpen} active={isActive("/memories")} />
            <MobileNavItem icon={<Gift size={20} />} text="Surprise" to="/surprise" setOpen={setOpen} active={isActive("/surprise")} />

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* =========================
   DESKTOP ITEM
========================= */

type NavItemProps = {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
};

function NavItem({ icon, text, to, active }: NavItemProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.05 }}>
      <Link
        to={to}
        className={`
          flex items-center gap-2 transition
          ${active ? "text-pink-500 font-bold" : "text-gray-700"}
        `}
      >
        {icon}
        {text}
      </Link>
    </motion.div>
  );
}

/* =========================
   MOBILE ITEM
========================= */

function MobileNavItem({
  icon,
  text,
  to,
  setOpen,
  active,
}: NavItemProps & { setOpen: (v: boolean) => void }) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`
          flex items-center gap-3 transition
          ${active ? "text-pink-500 font-bold" : "text-gray-700"}
        `}
      >
        {icon}
        {text}
      </Link>
    </motion.div>
  );
}