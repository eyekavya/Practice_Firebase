// Import libraries and assets
import React from "react";
import { motion } from "framer-motion";
import authApi from "../utils/firebase/auth/authApi";
// import "./App.css";

const Authentication = () => {
  const userData = {};

  async function onClickSubmit() {
    await authApi.signUpWithEmailPassword(userData);
  }
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/?beach')`,
        }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-transparent opacity-60" />

      {/* Floating Elements */}
      <motion.img
        src="/sweets-icon.svg"
        alt="sweet"
        className="absolute top-20 left-10 w-16 h-16"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src="/car-icon.svg"
        alt="car"
        className="absolute bottom-32 right-10 w-16 h-16"
        animate={{ x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      {/* Glassmorphic Sign-In Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 p-6 rounded-lg backdrop-blur-lg bg-white/30 border border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-2xl font-bold text-white mb-4">
            Sign In
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/60 text-black focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/60 text-black focus:ring focus:ring-blue-300 outline-none"
            />
            <motion.button
              type="submit"
              className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 text-white font-bold shadow-md hover:scale-105"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              onClick={onClickSubmit}
            >
              Sign In
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Authentication;
