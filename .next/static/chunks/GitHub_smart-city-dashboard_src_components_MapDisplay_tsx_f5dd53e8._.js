(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapDisplay",
    ()=>MapDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ]
});
__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker.prototype.options.icon = DefaultIcon;
// Custom component to handle map centering
function ChangeView(param) {
    let { center, zoom } = param;
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    map.setView(center, zoom);
    return null;
}
_s(ChangeView, "cX187cvZ2hODbkaiLn05gMk1sCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = ChangeView;
const MapDisplay = (param)=>{
    let { items } = param;
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapDisplay.useEffect": ()=>{
            setMounted(true);
        }
    }["MapDisplay.useEffect"], []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\MapDisplay.tsx:35:23",
        "data-orchids-name": "div",
        className: "h-full w-full bg-slate-100 animate-pulse rounded-xl flex items-center justify-center",
        children: "Loading Map..."
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
        lineNumber: 35,
        columnNumber: 24
    }, ("TURBOPACK compile-time value", void 0));
    // Default center (NYC based on seed data)
    const defaultCenter = [
        40.7128,
        -74.006
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\MapDisplay.tsx:41:4",
        "data-orchids-name": "div",
        className: "h-full w-full rounded-xl overflow-hidden border border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            "data-orchids-id": "src\\components\\MapDisplay.tsx:42:6@defaultCenter",
            "data-orchids-name": "MapContainer",
            center: defaultCenter,
            zoom: 14,
            style: {
                height: '100%',
                width: '100%'
            },
            scrollWheelZoom: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                    "data-orchids-id": "src\\components\\MapDisplay.tsx:48:8",
                    "data-orchids-name": "TileLayer",
                    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        "data-orchids-id": "src\\components\\MapDisplay.tsx:53:10@items",
                        "data-orchids-name": "Marker",
                        position: [
                            item.location.lat,
                            item.location.lng
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            "data-orchids-id": "src\\components\\MapDisplay.tsx:57:12@items",
                            "data-orchids-name": "Popup",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\MapDisplay.tsx:58:14@items",
                                "data-orchids-name": "div",
                                className: "p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src\\components\\MapDisplay.tsx:59:16@items",
                                        "data-orchids-name": "h4",
                                        className: "font-bold text-slate-900",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\components\\MapDisplay.tsx:60:16@items",
                                        "data-orchids-name": "p",
                                        className: "text-xs text-slate-600 uppercase",
                                        children: item.type.replace('_', ' ')
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MapDisplay.tsx:61:16@items",
                                        "data-orchids-name": "div",
                                        className: "mt-2 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\components\\MapDisplay.tsx:62:18@items",
                                                "data-orchids-name": "span",
                                                className: "w-2 h-2 rounded-full ".concat(item.status === 'healthy' ? 'bg-green-500' : item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500')
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\components\\MapDisplay.tsx:66:18@items",
                                                "data-orchids-name": "span",
                                                className: "text-xs font-medium capitalize",
                                                children: item.status
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\components\\MapDisplay.tsx:68:16@items",
                                        "data-orchids-name": "p",
                                        className: "text-[10px] text-slate-400 mt-1",
                                        children: [
                                            "Score: ",
                                            item.healthScore,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, item._id, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MapDisplay, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c1 = MapDisplay;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChangeView");
__turbopack_context__.k.register(_c1, "MapDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=GitHub_smart-city-dashboard_src_components_MapDisplay_tsx_f5dd53e8._.js.map