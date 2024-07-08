"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Switch
      size="lg"
      color="secondary"
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "light" ? "dark" : "light")}
    ></Switch>
  );
}
