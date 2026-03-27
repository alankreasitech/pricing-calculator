"use client";

import { useState } from "react";
import { Globe, Clock, Users, Mic, Headphones, Bot, LifeBuoy, BarChart3, Zap, Check, Languages, FileText, Video, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SERVICE_TYPES = [
    {
        id: "events",
        name: "Live Events",
        description: "Real-time captions, translations & streaming",
        icon: Video,
        baseHourlyRate: 150,
        color: "from-blue-500/20 to-blue-600/20",
        accentColor: "bg-blue-500",
        features: ["Real-time AI captions", "Live translation streams", "Multilingual polls", "Zoom, StreamYard & more"],
    },
    {
        id: "content",
        name: "Content Translation",
        description: "Audio, video, slides & documents",
        icon: FileText,
        baseHourlyRate: 100,
        color: "from-purple-500/20 to-purple-600/20",
        accentColor: "bg-purple-500",
        features: ["AI-powered transcription", "Subtitle generation", "Slide translation", "Document portal"],
    },
    {
        id: "conversations",
        name: "Conversations",
        description: "Multilingual meetings & discussions",
        icon: MessageCircle,
        baseHourlyRate: 75,
        color: "from-green-500/20 to-green-600/20",
        accentColor: "bg-green-500",
        features: ["Live captions in 100+ languages", "AI interpreter voices", "In-person & online", "Group conversations"],
    },
];

const ADDONS = [
    {
        id: "tts",
        name: "Text-to-Speech",
        description: "AI voice output for translations",
        price: 50,
        perUnit: "event",
        icon: Headphones,
    },
    {
        id: "interpreter",
        name: "Professional Interpreter",
        description: "Human interpreter for live supervision",
        price: 200,
        perUnit: "hour",
        icon: Mic,
    },
    {
        id: "ai-custom",
        name: "AI Customization",
        description: "Train AI on your terminology & style",
        price: 500,
        perUnit: "project",
        icon: Bot,
    },
    {
        id: "support",
        name: "On-Call Support",
        description: "Dedicated technician during your event",
        price: 150,
        perUnit: "event",
        icon: LifeBuoy,
    },
    {
        id: "polls",
        name: "Multilingual Polls",
        description: "Interactive polls in multiple languages",
        price: 25,
        perUnit: "event",
        icon: BarChart3,
    },
];

export default function PricingCalculator() {
    const [serviceType, setServiceType] = useState("events");
    const [hours, setHours] = useState(2);
    const [numLanguages, setNumLanguages] = useState(2);
    const [connections, setConnections] = useState(100);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const [premiumLanguages, setPremiumLanguages] = useState(false);

    const service = SERVICE_TYPES.find((s) => s.id === serviceType)!;

    const baseCost = service.baseHourlyRate * hours;
    const languageCost = Math.max(0, (numLanguages - 2) * 25);
    const connectionCost = Math.max(0, (connections - 100) * 0.10);
    const premiumLanguageCost = premiumLanguages ? hours * 25 : 0;

    const addonCost = selectedAddons.reduce((acc, id) => {
        const addon = ADDONS.find((a) => a.id === id);
        if (!addon) return acc;
        if (addon.perUnit === "hour") return acc + addon.price * hours;
        if (addon.perUnit === "project") return acc + addon.price;
        return acc + addon.price;
    }, 0);

    const monthlyTotal = baseCost + languageCost + connectionCost + premiumLanguageCost + addonCost;

    const toggleAddon = (id: string) => {
        setSelectedAddons((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-12">
            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Languages className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    spf.io Pricing Calculator
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Build your perfect multilingual solution. Only pay for what you need.
                </p>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                    {/* Service Type Selection */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" />
                                Service Type
                            </CardTitle>
                            <CardDescription>Choose the type of translation service you need</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {SERVICE_TYPES.map((service) => {
                                    const ServiceIcon = service.icon;
                                    const isActive = serviceType === service.id;
                                    return (
                                        <div
                                            key={service.id}
                                            onClick={() => setServiceType(service.id)}
                                            className={`relative cursor-pointer transition-all duration-300 group border-2 rounded-xl p-4 ${isActive
                                                    ? "border-primary ring-2 ring-primary/20"
                                                    : "border-border/50 hover:border-border"
                                                } overflow-hidden`}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl`} />
                                            <div className="relative">
                                                <div className={`w-10 h-10 rounded-lg ${service.accentColor} flex items-center justify-center mb-3 shadow-lg`}>
                                                    <ServiceIcon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                                                <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
                                                <div className="text-sm font-semibold text-primary">
                                                    ${service.baseHourlyRate}/hour
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Duration & Languages */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <CardTitle className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-primary" />
                                            Duration
                                        </CardTitle>
                                        <CardDescription>Event or session length</CardDescription>
                                    </div>
                                    <div className="text-3xl font-bold text-primary">{hours}<span className="text-sm text-muted-foreground ml-1">hrs</span></div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <Slider
                                    value={[hours]}
                                    onValueChange={(val) => setHours(Array.isArray(val) ? val[0] : val)}
                                    max={24}
                                    min={1}
                                    step={1}
                                    className="py-4"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                    <span>1 hr</span>
                                    <span>12 hrs</span>
                                    <span>24 hrs</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <CardTitle className="flex items-center gap-2">
                                            <Globe className="w-5 h-5 text-primary" />
                                            Languages
                                        </CardTitle>
                                        <CardDescription>Target languages (2 included)</CardDescription>
                                    </div>
                                    <div className="text-3xl font-bold text-primary">{numLanguages}</div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <Slider
                                    value={[numLanguages]}
                                    onValueChange={(val) => setNumLanguages(Array.isArray(val) ? val[0] : val)}
                                    max={20}
                                    min={1}
                                    step={1}
                                    className="py-4"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                    <span>1 lang</span>
                                    <span>10 langs</span>
                                    <span>20 langs</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Connections */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-primary" />
                                        Attendees / Connections
                                    </CardTitle>
                                    <CardDescription>Number of viewers or participants (100 included)</CardDescription>
                                </div>
                                <div className="text-3xl font-bold text-primary">{connections.toLocaleString()}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                            <Slider
                                value={[connections]}
                                onValueChange={(val) => setConnections(Array.isArray(val) ? val[0] : val)}
                                max={10000}
                                min={10}
                                step={10}
                                className="py-4"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                <span>10</span>
                                <span>5,000</span>
                                <span>10,000+</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Premium Languages Toggle */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardContent className="py-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-amber-500/10 rounded-xl">
                                        <Globe className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <Label className="text-base font-semibold cursor-pointer" htmlFor="premium-languages">
                                            Premium Languages
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Add support for complex languages (Chinese, Japanese, Arabic, etc.)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-muted-foreground">+$25/hr</span>
                                    <Switch
                                        id="premium-languages"
                                        checked={premiumLanguages}
                                        onCheckedChange={setPremiumLanguages}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Add-ons */}
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" />
                                Optional Add-ons
                            </CardTitle>
                            <CardDescription>Enhance your experience with these extras</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ADDONS.map((addon) => {
                                const AddonIcon = addon.icon;
                                const isSelected = selectedAddons.includes(addon.id);
                                return (
                                    <div
                                        key={addon.id}
                                        onClick={() => toggleAddon(addon.id)}
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${isSelected
                                                ? "border-primary bg-primary/5"
                                                : "border-border/50 hover:border-border bg-background/50"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center transition-colors ${isSelected ? "bg-primary/20" : ""}`}>
                                                <AddonIcon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="font-semibold text-sm">{addon.name}</div>
                                                <div className="text-xs text-muted-foreground">{addon.description}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-sm text-primary">+${addon.price}</div>
                                            <div className="text-xs text-muted-foreground">/{addon.perUnit}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>

                {/* Summary Sticky Card */}
                <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
                    <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden bg-background/80 backdrop-blur-xl">
                        <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
                        <CardHeader className="text-center">
                            <CardTitle>Estimate</CardTitle>
                            <CardDescription>Your projected cost</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">{service.name}</span>
                                    <span className="font-medium">${baseCost.toLocaleString()}</span>
                                </div>
                                {languageCost > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Additional languages ({numLanguages - 2})</span>
                                        <span className="font-medium">+${languageCost}</span>
                                    </div>
                                )}
                                {connectionCost > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Extra connections</span>
                                        <span className="font-medium">+${connectionCost.toFixed(0)}</span>
                                    </div>
                                )}
                                {premiumLanguageCost > 0 && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Premium languages</span>
                                        <span className="font-medium">+${premiumLanguageCost}</span>
                                    </div>
                                )}
                                {selectedAddons.length > 0 && (
                                    <>
                                        <div className="pt-2 border-t border-border" />
                                        {selectedAddons.map((id) => {
                                            const addon = ADDONS.find((a) => a.id === id);
                                            if (!addon) return null;
                                            const cost = addon.perUnit === "hour" ? addon.price * hours : addon.price;
                                            return (
                                                <div key={id} className="flex justify-between">
                                                    <span className="text-muted-foreground">{addon.name}</span>
                                                    <span className="font-medium">+${cost.toLocaleString()}</span>
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>

                            <div className="pt-4 border-t border-border">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key="total"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-center"
                                    >
                                        <div className="text-sm text-muted-foreground mb-1">Total Estimate</div>
                                        <div className="text-5xl font-black tracking-tighter">
                                            ${monthlyTotal.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-muted-foreground mt-1">one-time project</div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="space-y-4 pt-4">
                                <Button className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
                                    Request a Quote
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                                    <Check className="w-3 h-3 text-green-500" />
                                    Custom pricing available for larger needs
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Info Card */}
                    <Card className="mt-6 border-border/50 bg-card/50 transition-all hover:bg-card">
                        <CardContent className="pt-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 rounded-full h-fit shrink-0">
                                    <Languages className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-sm">100+ Languages</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Translate between 100+ languages with AI-powered accuracy. Human review available for guaranteed quality.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
