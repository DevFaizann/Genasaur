"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("12550011-fd34-445e-a6bb-3a38ed978288");
    }, []);

    return null;
}