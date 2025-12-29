module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsOverview",
    ()=>StatsOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
'use client';
;
;
const StatsOverview = ({ data })=>{
    const stats = [
        {
            title: 'Total Systems',
            value: data.length,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                "data-orchids-id": "src\\components\\StatsOverview.tsx:15:12",
                "data-orchids-name": "Package",
                className: "w-6 h-6 text-blue-500"
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            color: 'bg-blue-50'
        },
        {
            title: 'Healthy',
            value: data.filter((i)=>i.status === 'healthy').length,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                "data-orchids-id": "src\\components\\StatsOverview.tsx:21:12",
                "data-orchids-name": "CheckCircle",
                className: "w-6 h-6 text-green-500"
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            color: 'bg-green-50'
        },
        {
            title: 'Warnings',
            value: data.filter((i)=>i.status === 'warning').length,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                "data-orchids-id": "src\\components\\StatsOverview.tsx:27:12",
                "data-orchids-name": "AlertTriangle",
                className: "w-6 h-6 text-yellow-500"
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            color: 'bg-yellow-50'
        },
        {
            title: 'Critical',
            value: data.filter((i)=>i.status === 'critical').length,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                "data-orchids-id": "src\\components\\StatsOverview.tsx:33:12",
                "data-orchids-name": "ActivityIcon",
                className: "w-6 h-6 text-red-500"
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            color: 'bg-red-50'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\StatsOverview.tsx:39:4",
        "data-orchids-name": "div",
        className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
        children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-map-index": idx,
                "data-orchids-id": "src\\components\\StatsOverview.tsx:41:8@stats",
                "data-orchids-name": "div",
                className: `${stat.color} p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-map-index": idx,
                        "data-orchids-id": "src\\components\\StatsOverview.tsx:42:10@stats",
                        "data-orchids-name": "div",
                        className: "p-3 bg-white rounded-lg shadow-sm",
                        children: stat.icon
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-map-index": idx,
                        "data-orchids-id": "src\\components\\StatsOverview.tsx:43:10@stats",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-map-index": idx,
                                "data-orchids-id": "src\\components\\StatsOverview.tsx:44:12@stats",
                                "data-orchids-name": "p",
                                className: "text-sm text-gray-500 font-medium",
                                children: stat.title
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-map-index": idx,
                                "data-orchids-id": "src\\components\\StatsOverview.tsx:45:12@stats",
                                "data-orchids-name": "p",
                                className: "text-2xl font-bold text-gray-800",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, idx, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/GitHub/smart-city-dashboard/src/lib/utils.ts'\n\nUnexpected token `.`. Expected yield, an identifier, [ or {");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/GitHub/smart-city-dashboard/src/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src\\components\\ui\\progress.tsx:14:4",
        "data-orchids-name": "ProgressPrimitive.Root",
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-orchids-id": "src\\components\\ui\\progress.tsx:22:6",
            "data-orchids-name": "ProgressPrimitive.Indicator",
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfrastructureCard",
    ()=>InfrastructureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const InfrastructureCard = ({ item })=>{
    const getIcon = (type)=>{
        switch(type){
            case 'streetlight':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    "data-orchids-id": "src\\components\\InfrastructureCard.tsx:15:33",
                    "data-orchids-name": "Zap",
                    className: "w-5 h-5 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                    lineNumber: 15,
                    columnNumber: 34
                }, ("TURBOPACK compile-time value", void 0));
            case 'traffic_signal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                    "data-orchids-id": "src\\components\\InfrastructureCard.tsx:16:36",
                    "data-orchids-name": "Settings",
                    className: "w-5 h-5 text-purple-500"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                    lineNumber: 16,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0));
            case 'water_pipe':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                    "data-orchids-id": "src\\components\\InfrastructureCard.tsx:17:32",
                    "data-orchids-name": "Droplets",
                    className: "w-5 h-5 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                    lineNumber: 17,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0));
            case 'waste_bin':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    "data-orchids-id": "src\\components\\InfrastructureCard.tsx:18:31",
                    "data-orchids-name": "Trash2",
                    className: "w-5 h-5 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                    lineNumber: 18,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                    "data-orchids-id": "src\\components\\InfrastructureCard.tsx:19:22",
                    "data-orchids-name": "Settings",
                    className: "w-5 h-5 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                    lineNumber: 19,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
            case 'healthy':
                return 'bg-green-100 text-green-700';
            case 'warning':
                return 'bg-yellow-100 text-yellow-700';
            case 'critical':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:33:4",
        "data-orchids-name": "Card",
        className: "overflow-hidden hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:34:6",
                "data-orchids-name": "CardHeader",
                className: "flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:35:8",
                        "data-orchids-name": "div",
                        className: "flex items-center space-x-2",
                        children: [
                            getIcon(item.type),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:37:10",
                                "data-orchids-name": "CardTitle",
                                className: "text-sm font-bold truncate max-w-[150px]",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:39:8",
                        "data-orchids-name": "span",
                        className: `text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${getStatusColor(item.status)}`,
                        children: item.status
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:43:6",
                "data-orchids-name": "CardContent",
                className: "pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:44:8",
                        "data-orchids-name": "div",
                        className: "flex items-center text-xs text-gray-500 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:45:10",
                                "data-orchids-name": "MapPin",
                                className: "w-3 h-3 mr-1"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:46:10",
                                "data-orchids-name": "span",
                                className: "truncate",
                                children: item.location.address
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:49:8",
                        "data-orchids-name": "div",
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:50:10",
                                "data-orchids-name": "div",
                                className: "flex justify-between text-xs font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:51:12",
                                        "data-orchids-name": "span",
                                        children: "Health Status"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:52:12",
                                        "data-orchids-name": "span",
                                        children: [
                                            item.healthScore,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                value: item.healthScore,
                                className: "h-1.5"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\InfrastructureCard.tsx:57:8",
                        "data-orchids-name": "div",
                        className: "mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:58:10",
                                "data-orchids-name": "span",
                                children: "Last Maintained"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\InfrastructureCard.tsx:59:10",
                                "data-orchids-name": "span",
                                children: new Date(item.lastMaintenance).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/GitHub/smart-city-dashboard/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src\\components\\ui\\button.tsx:52:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/GitHub/smart-city-dashboard/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src\\components\\ui\\input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/GitHub/smart-city-dashboard/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-orchids-id": "src\\components\\ui\\textarea.tsx:7:4",
        "data-orchids-name": "textarea",
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:12:9",
        "data-orchids-name": "SelectPrimitive.Root",
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:18:9",
        "data-orchids-name": "SelectPrimitive.Group",
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:24:9",
        "data-orchids-name": "SelectPrimitive.Value",
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:36:4",
        "data-orchids-name": "SelectPrimitive.Trigger",
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                "data-orchids-id": "src\\components\\ui\\select.tsx:46:6",
                "data-orchids-name": "SelectPrimitive.Icon",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    "data-orchids-id": "src\\components\\ui\\select.tsx:47:8",
                    "data-orchids-name": "ChevronDownIcon",
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "popper", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:61:4",
        "data-orchids-name": "SelectPrimitive.Portal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-orchids-id": "src\\components\\ui\\select.tsx:62:6",
            "data-orchids-name": "SelectPrimitive.Content",
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {
                    "data-orchids-id": "src\\components\\ui\\select.tsx:74:8",
                    "data-orchids-name": "SelectScrollUpButton"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    "data-orchids-id": "src\\components\\ui\\select.tsx:75:8",
                    "data-orchids-name": "SelectPrimitive.Viewport",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {
                    "data-orchids-id": "src\\components\\ui\\select.tsx:84:8",
                    "data-orchids-name": "SelectScrollDownButton"
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:95:4",
        "data-orchids-name": "SelectPrimitive.Label",
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:109:4",
        "data-orchids-name": "SelectPrimitive.Item",
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-orchids-id": "src\\components\\ui\\select.tsx:117:6",
                "data-orchids-name": "span",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    "data-orchids-id": "src\\components\\ui\\select.tsx:118:8",
                    "data-orchids-name": "SelectPrimitive.ItemIndicator",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        "data-orchids-id": "src\\components\\ui\\select.tsx:119:10",
                        "data-orchids-name": "CheckIcon",
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                "data-orchids-id": "src\\components\\ui\\select.tsx:122:6",
                "data-orchids-name": "SelectPrimitive.ItemText",
                children: children
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:132:4",
        "data-orchids-name": "SelectPrimitive.Separator",
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:145:4",
        "data-orchids-name": "SelectPrimitive.ScrollUpButton",
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            "data-orchids-id": "src\\components\\ui\\select.tsx:153:6",
            "data-orchids-name": "ChevronUpIcon",
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-orchids-id": "src\\components\\ui\\select.tsx:163:4",
        "data-orchids-name": "SelectPrimitive.ScrollDownButton",
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            "data-orchids-id": "src\\components\\ui\\select.tsx:171:6",
            "data-orchids-name": "ChevronDownIcon",
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComplaintsSection",
    ()=>ComplaintsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const ComplaintsSection = ({ complaints, onRefresh })=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        type: 'other',
        citizenName: ''
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/complaints', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Complaint submitted successfully!');
                setFormData({
                    title: '',
                    description: '',
                    type: 'other',
                    citizenName: ''
                });
                onRefresh();
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Failed to submit complaint');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ComplaintsSection.tsx:47:4",
        "data-orchids-name": "div",
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\ComplaintsSection.tsx:48:6",
                "data-orchids-name": "Card",
                className: "lg:col-span-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "src\\components\\ComplaintsSection.tsx:49:8",
                        "data-orchids-name": "CardHeader",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:50:10",
                            "data-orchids-name": "CardTitle",
                            children: "Report an Issue"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\ComplaintsSection.tsx:52:8",
                        "data-orchids-name": "CardContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:53:10@handleSubmit",
                            "data-orchids-name": "form",
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:54:12",
                                    "data-orchids-name": "Input",
                                    placeholder: "Your Name",
                                    value: formData.citizenName,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            citizenName: e.target.value
                                        }),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:60:12",
                                    "data-orchids-name": "Input",
                                    placeholder: "Issue Title",
                                    value: formData.title,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            title: e.target.value
                                        }),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                    onValueChange: (val)=>setFormData({
                                            ...formData,
                                            type: val
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:67:14",
                                            "data-orchids-name": "SelectTrigger",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                "data-orchids-id": "src\\components\\ComplaintsSection.tsx:68:16",
                                                "data-orchids-name": "SelectValue",
                                                placeholder: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:70:14",
                                            "data-orchids-name": "SelectContent",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:71:16",
                                                    "data-orchids-name": "SelectItem",
                                                    value: "streetlight",
                                                    children: "Streetlight"
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:72:16",
                                                    "data-orchids-name": "SelectItem",
                                                    value: "traffic_signal",
                                                    children: "Traffic Signal"
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:73:16",
                                                    "data-orchids-name": "SelectItem",
                                                    value: "water",
                                                    children: "Water Supply"
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:74:16",
                                                    "data-orchids-name": "SelectItem",
                                                    value: "waste",
                                                    children: "Waste Management"
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:75:16",
                                                    "data-orchids-name": "SelectItem",
                                                    value: "other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:78:12",
                                    "data-orchids-name": "Textarea",
                                    placeholder: "Describe the problem...",
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:84:12",
                                    "data-orchids-name": "Button",
                                    type: "submit",
                                    className: "w-full",
                                    disabled: loading,
                                    children: loading ? 'Submitting...' : 'Submit Complaint'
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\ComplaintsSection.tsx:91:6",
                "data-orchids-name": "Card",
                className: "lg:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "src\\components\\ComplaintsSection.tsx:92:8",
                        "data-orchids-name": "CardHeader",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:93:10",
                            "data-orchids-name": "CardTitle",
                            children: "Recent Complaints"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\ComplaintsSection.tsx:95:8",
                        "data-orchids-name": "CardContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:96:10",
                            "data-orchids-name": "div",
                            className: "space-y-4 max-h-[400px] overflow-y-auto pr-2",
                            children: complaints.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\ComplaintsSection.tsx:98:14",
                                "data-orchids-name": "p",
                                className: "text-gray-500 text-center py-8",
                                children: "No complaints yet."
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : complaints.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": idx,
                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:101:16@complaints",
                                    "data-orchids-name": "div",
                                    className: "p-4 border rounded-lg bg-white shadow-sm flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": idx,
                                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:102:18@complaints",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:103:20@complaints",
                                                    "data-orchids-name": "h4",
                                                    className: "font-bold text-gray-800",
                                                    children: c.title
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:104:20@complaints",
                                                    "data-orchids-name": "p",
                                                    className: "text-sm text-gray-600 mt-1",
                                                    children: c.description
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src\\components\\ComplaintsSection.tsx:105:20@complaints",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center space-x-2 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:106:22@complaints",
                                                            "data-orchids-name": "span",
                                                            className: "text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase",
                                                            children: c.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:107:22@complaints",
                                                            "data-orchids-name": "span",
                                                            className: "text-[10px] text-gray-400",
                                                            children: new Date(c.createdAt).toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-map-index": idx,
                                            "data-orchids-id": "src\\components\\ComplaintsSection.tsx:110:18@complaints",
                                            "data-orchids-name": "span",
                                            className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${c.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`,
                                            children: c.status
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SensorChart",
    ()=>SensorChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/card.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const SensorChart = ({ data, title })=>{
    // Format the data for Recharts - we take the raw DB records and clean them up
    const chartData = data && data.length > 0 ? data.map((d)=>({
            // Show only time for better readability on the X axis
            name: new Date(d.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            }),
            value: d.value,
            fullDate: new Date(d.timestamp).toLocaleString()
        })) : [
        // Fallback data shown when the database is empty (during first load)
        {
            name: '10:00',
            value: 0
        },
        {
            name: '11:00',
            value: 0
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        "data-orchids-id": "src\\components\\SensorChart.tsx:35:4",
        "data-orchids-name": "Card",
        className: "w-full h-[320px] bg-white border-slate-100 shadow-sm hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                "data-orchids-id": "src\\components\\SensorChart.tsx:36:6",
                "data-orchids-name": "CardHeader",
                className: "pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    "data-orchids-id": "src\\components\\SensorChart.tsx:37:8",
                    "data-orchids-name": "CardTitle",
                    className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                "data-orchids-id": "src\\components\\SensorChart.tsx:41:6",
                "data-orchids-name": "CardContent",
                className: "h-[240px] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    "data-orchids-id": "src\\components\\SensorChart.tsx:43:8",
                    "data-orchids-name": "ResponsiveContainer",
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                        "data-orchids-id": "src\\components\\SensorChart.tsx:44:10@chartData",
                        "data-orchids-name": "AreaChart",
                        data: chartData,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                "data-orchids-id": "src\\components\\SensorChart.tsx:45:12",
                                "data-orchids-name": "defs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    "data-orchids-id": "src\\components\\SensorChart.tsx:47:14",
                                    "data-orchids-name": "linearGradient",
                                    id: "colorValue",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            "data-orchids-id": "src\\components\\SensorChart.tsx:48:16",
                                            "data-orchids-name": "stop",
                                            offset: "5%",
                                            stopColor: "#3b82f6",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            "data-orchids-id": "src\\components\\SensorChart.tsx:49:16",
                                            "data-orchids-name": "stop",
                                            offset: "95%",
                                            stopColor: "#3b82f6",
                                            stopOpacity: 0
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                "data-orchids-id": "src\\components\\SensorChart.tsx:52:12",
                                "data-orchids-name": "CartesianGrid",
                                strokeDasharray: "3 3",
                                vertical: false,
                                stroke: "#f1f5f9"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                "data-orchids-id": "src\\components\\SensorChart.tsx:53:12",
                                "data-orchids-name": "XAxis",
                                dataKey: "name",
                                fontSize: 10,
                                tickLine: false,
                                axisLine: false,
                                tick: {
                                    fill: '#94a3b8'
                                },
                                minTickGap: 30
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                "data-orchids-id": "src\\components\\SensorChart.tsx:61:12",
                                "data-orchids-name": "YAxis",
                                fontSize: 10,
                                tickLine: false,
                                axisLine: false,
                                tick: {
                                    fill: '#94a3b8'
                                }
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                "data-orchids-id": "src\\components\\SensorChart.tsx:68:12",
                                "data-orchids-name": "Tooltip",
                                contentStyle: {
                                    borderRadius: '8px',
                                    border: 'none',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                },
                                labelStyle: {
                                    fontWeight: 'bold',
                                    marginBottom: '4px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                "data-orchids-id": "src\\components\\SensorChart.tsx:72:12",
                                "data-orchids-name": "Area",
                                type: "monotone",
                                dataKey: "value",
                                stroke: "#3b82f6",
                                strokeWidth: 2,
                                fillOpacity: 1,
                                fill: "url(#colorValue)",
                                animationDuration: 1500
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/GitHub/smart-city-dashboard/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartCityDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$StatsOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/StatsOverview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$InfrastructureCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/InfrastructureCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ComplaintsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ComplaintsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$SensorChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/SensorChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-ssr] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/smart-city-dashboard/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
;
;
;
;
;
// Dynamically import MapDisplay because Leaflet doesn't support SSR (Server-Side Rendering)
const MapDisplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/GitHub/smart-city-dashboard/src/components/MapDisplay.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\app\\page.tsx:16:17",
            "data-orchids-name": "div",
            className: "h-full w-full bg-slate-100 animate-pulse rounded-xl flex items-center justify-center",
            children: "Loading Map..."
        }, void 0, false, {
            fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
function SmartCityDashboard() {
    const [infrastructure, setInfrastructure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [complaints, setComplaints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sensorHistory, setSensorHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [simulating, setSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch all dashboard data from our API
    const fetchData = async ()=>{
        try {
            const [infraRes, compRes, sensorRes] = await Promise.all([
                fetch('/api/infrastructure'),
                fetch('/api/complaints'),
                fetch('/api/sensor-data?limit=20') // Get recent history for charts
            ]);
            const infraData = await infraRes.json();
            const compData = await compRes.json();
            const sensorData = await sensorRes.json();
            setInfrastructure(infraData);
            setComplaints(compData);
            setSensorHistory(sensorData);
        } catch (error) {
            console.error('Error fetching data:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Connection Error: Please check if MongoDB is running');
        } finally{
            setLoading(false);
        }
    };
    // Initial load and periodic refresh
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
        // Auto-refresh data every 10 seconds to simulate real-time monitoring
        const interval = setInterval(fetchData, 10000);
        return ()=>clearInterval(interval);
    }, []);
    // Helper function to seed initial data if the database is empty
    const handleSeed = async ()=>{
        setLoading(true);
        try {
            const res = await fetch('/api/seed');
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Database Reset: Sample data loaded successfully');
                fetchData();
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('Seeding failed. Check your API connection.');
        } finally{
            setLoading(false);
        }
    };
    // Trigger the IoT simulation backend
    const handleSimulate = async ()=>{
        setSimulating(true);
        try {
            const res = await fetch('/api/sensor-data/simulate');
            if (res.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('IoT Sync: Received new sensor packets');
                fetchData();
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error('IoT Simulation failed to broadcast data');
        } finally{
            setSimulating(false);
        }
    };
    // Filter infrastructure by health for the "Predictive Alerts" section
    const criticalItems = infrastructure.filter((item)=>item.status !== 'healthy');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\app\\page.tsx:94:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-slate-50 p-6 md:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\app\\page.tsx:96:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\page.tsx:97:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "data-orchids-id": "src\\app\\page.tsx:98:10",
                                "data-orchids-name": "h1",
                                className: "text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        "data-orchids-id": "src\\app\\page.tsx:99:12",
                                        "data-orchids-name": "LayoutDashboard",
                                        className: "w-8 h-8 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    "Polar City Smart Monitor"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\app\\page.tsx:102:10",
                                "data-orchids-name": "p",
                                className: "text-slate-500 mt-1",
                                children: "Next-Gen Municipal Infrastructure Control Center"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\page.tsx:104:8",
                        "data-orchids-name": "div",
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src\\app\\page.tsx:105:10@handleSeed",
                                "data-orchids-name": "Button",
                                variant: "outline",
                                size: "sm",
                                onClick: handleSeed,
                                className: "bg-white border-slate-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        "data-orchids-id": "src\\app\\page.tsx:106:12",
                                        "data-orchids-name": "Database",
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    "Reset Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src\\app\\page.tsx:109:10@handleSimulate",
                                "data-orchids-name": "Button",
                                variant: "default",
                                size: "sm",
                                onClick: handleSimulate,
                                disabled: simulating,
                                className: "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        "data-orchids-id": "src\\app\\page.tsx:110:12",
                                        "data-orchids-name": "RefreshCw",
                                        className: `w-4 h-4 mr-2 ${simulating ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    simulating ? 'Syncing IoT...' : 'Broadcast IoT Data'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\app\\page.tsx:116:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$StatsOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatsOverview"], {
                        "data-orchids-id": "src\\app\\page.tsx:118:8",
                        "data-orchids-name": "StatsOverview",
                        data: infrastructure
                    }, void 0, false, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\page.tsx:120:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 xl:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\page.tsx:123:10",
                                "data-orchids-name": "div",
                                className: "xl:col-span-2 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        "data-orchids-id": "src\\app\\page.tsx:124:12",
                                        "data-orchids-name": "section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\page.tsx:125:14",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        "data-orchids-id": "src\\app\\page.tsx:126:16",
                                                        "data-orchids-name": "h2",
                                                        className: "text-xl font-bold text-slate-800 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                "data-orchids-id": "src\\app\\page.tsx:127:18",
                                                                "data-orchids-name": "Activity",
                                                                className: "w-5 h-5 text-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Systems Operational Status"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\app\\page.tsx:130:16",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src\\app\\page.tsx:131:18",
                                                                "data-orchids-name": "span",
                                                                className: "relative flex h-2 w-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src\\app\\page.tsx:132:20",
                                                                        "data-orchids-name": "span",
                                                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                        lineNumber: 132,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src\\app\\page.tsx:133:20",
                                                                        "data-orchids-name": "span",
                                                                        className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src\\app\\page.tsx:135:18",
                                                                "data-orchids-name": "span",
                                                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest",
                                                                children: "Live Network"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\page.tsx:138:14",
                                                "data-orchids-name": "div",
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: loading && infrastructure.length === 0 ? Array(4).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\app\\page.tsx:141:20",
                                                        "data-orchids-name": "div",
                                                        className: "h-40 bg-white border border-slate-100 animate-pulse rounded-xl"
                                                    }, i, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)) : infrastructure.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$InfrastructureCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfrastructureCard"], {
                                                        "data-orchids-id": "src\\app\\page.tsx:145:20@infrastructure",
                                                        "data-orchids-name": "InfrastructureCard",
                                                        item: item
                                                    }, item._id, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        "data-orchids-id": "src\\app\\page.tsx:152:12",
                                        "data-orchids-name": "section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                "data-orchids-id": "src\\app\\page.tsx:153:14",
                                                "data-orchids-name": "h2",
                                                className: "text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                        "data-orchids-id": "src\\app\\page.tsx:154:16",
                                                        "data-orchids-name": "Activity",
                                                        className: "w-5 h-5 text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Historical Sensor Trends"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\page.tsx:157:14",
                                                "data-orchids-name": "div",
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$SensorChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SensorChart"], {
                                                        "data-orchids-id": "src\\app\\page.tsx:158:16",
                                                        "data-orchids-name": "SensorChart",
                                                        data: sensorHistory.filter((s)=>s.metricType === 'brightness' || s.metricType === 'fill_level'),
                                                        title: "Environmental Fill & Lighting Levels"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$SensorChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SensorChart"], {
                                                        "data-orchids-id": "src\\app\\page.tsx:162:16",
                                                        "data-orchids-name": "SensorChart",
                                                        data: sensorHistory.filter((s)=>s.metricType === 'pressure'),
                                                        title: "Utility Pressure (PSI) Monitoring"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\page.tsx:171:10",
                                "data-orchids-name": "div",
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        "data-orchids-id": "src\\app\\page.tsx:172:12",
                                        "data-orchids-name": "section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                "data-orchids-id": "src\\app\\page.tsx:173:14",
                                                "data-orchids-name": "h2",
                                                className: "text-xl font-bold text-slate-800 mb-4 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                        "data-orchids-id": "src\\app\\page.tsx:174:16",
                                                        "data-orchids-name": "MapIcon",
                                                        className: "w-5 h-5 text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Spatial Analysis"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\page.tsx:177:14",
                                                "data-orchids-name": "div",
                                                className: "h-[400px] rounded-xl relative shadow-sm overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapDisplay, {
                                                    "data-orchids-id": "src\\app\\page.tsx:178:16",
                                                    "data-orchids-name": "MapDisplay",
                                                    items: infrastructure
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        "data-orchids-id": "src\\app\\page.tsx:182:12",
                                        "data-orchids-name": "section",
                                        className: "bg-white p-6 rounded-xl shadow-sm border border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\page.tsx:183:14",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-between mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "src\\app\\page.tsx:184:16",
                                                    "data-orchids-name": "h3",
                                                    className: "font-bold text-slate-800 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                            "data-orchids-id": "src\\app\\page.tsx:185:18",
                                                            "data-orchids-name": "ShieldAlert",
                                                            className: "w-4 h-4 text-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Predictive AI Alerts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\page.tsx:189:14",
                                                "data-orchids-name": "div",
                                                className: "space-y-3",
                                                children: [
                                                    criticalItems.length > 0 ? criticalItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src\\app\\page.tsx:192:20@criticalItems",
                                                            "data-orchids-name": "div",
                                                            className: `p-3 border-l-4 rounded-r-md ${item.status === 'critical' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-map-index": idx,
                                                                    "data-orchids-id": "src\\app\\page.tsx:193:22@criticalItems",
                                                                    "data-orchids-name": "p",
                                                                    className: `text-xs font-bold ${item.status === 'critical' ? 'text-red-700' : 'text-yellow-700'}`,
                                                                    children: [
                                                                        item.status.toUpperCase(),
                                                                        ": ",
                                                                        item.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-map-index": idx,
                                                                    "data-orchids-id": "src\\app\\page.tsx:196:22@criticalItems",
                                                                    "data-orchids-name": "p",
                                                                    className: `text-[10px] mt-1 ${item.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}`,
                                                                    children: item.status === 'critical' ? 'Critical failure detected. Emergency maintenance dispatched.' : 'Efficiency dropping below 70%. Maintenance recommended.'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\app\\page.tsx:202:18",
                                                        "data-orchids-name": "div",
                                                        className: "text-center py-6 border-2 border-dashed border-slate-100 rounded-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src\\app\\page.tsx:203:20",
                                                            "data-orchids-name": "p",
                                                            className: "text-xs text-slate-400 italic",
                                                            children: "No anomalies detected by AI models."
                                                        }, void 0, false, {
                                                            fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\app\\page.tsx:208:16",
                                                        "data-orchids-name": "div",
                                                        className: "mt-4 pt-4 border-t border-slate-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src\\app\\page.tsx:209:18",
                                                                "data-orchids-name": "p",
                                                                className: "text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-2",
                                                                children: "Upcoming Maintenance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src\\app\\page.tsx:210:18",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center justify-between text-[11px] text-slate-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src\\app\\page.tsx:211:20",
                                                                        "data-orchids-name": "span",
                                                                        children: "Street Light #101"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src\\app\\page.tsx:212:20",
                                                                        "data-orchids-name": "span",
                                                                        className: "font-mono",
                                                                        children: "Jan 05, 2026"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "data-orchids-id": "src\\app\\page.tsx:221:8",
                        "data-orchids-name": "section",
                        className: "mt-12 pt-12 border-t border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\page.tsx:222:10",
                                "data-orchids-name": "div",
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src\\app\\page.tsx:223:12",
                                        "data-orchids-name": "h2",
                                        className: "text-2xl font-bold text-slate-900 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                "data-orchids-id": "src\\app\\page.tsx:224:14",
                                                "data-orchids-name": "MessageSquare",
                                                className: "w-6 h-6 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            "Citizen Feedback & Reporting"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\app\\page.tsx:227:12",
                                        "data-orchids-name": "p",
                                        className: "text-slate-500 text-sm mt-1",
                                        children: "Empowering residents to improve city infrastructure together."
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$src$2f$components$2f$ComplaintsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComplaintsSection"], {
                                "data-orchids-id": "src\\app\\page.tsx:229:10@fetchData",
                                "data-orchids-name": "ComplaintsSection",
                                complaints: complaints,
                                onRefresh: fetchData
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                "data-orchids-id": "src\\app\\page.tsx:233:6",
                "data-orchids-name": "footer",
                className: "max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\page.tsx:234:8",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\page.tsx:235:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                        "data-orchids-id": "src\\app\\page.tsx:235:51",
                                        "data-orchids-name": "Droplets",
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 118
                                    }, this),
                                    " Water"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\page.tsx:236:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                        "data-orchids-id": "src\\app\\page.tsx:236:51",
                                        "data-orchids-name": "Thermometer",
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 118
                                    }, this),
                                    " Energy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\page.tsx:237:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        "data-orchids-id": "src\\app\\page.tsx:237:51",
                                        "data-orchids-name": "MapIcon",
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 118
                                    }, this),
                                    " GIS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\page.tsx:239:8",
                        "data-orchids-name": "div",
                        className: "text-center md:text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\app\\page.tsx:240:10",
                                "data-orchids-name": "p",
                                children: "© 2025 Polar City Municipal - Smart Systems Division"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$smart$2d$city$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\app\\page.tsx:241:10",
                                "data-orchids-name": "p",
                                className: "text-[10px] mt-1 uppercase tracking-widest font-bold text-blue-400",
                                children: "Class 12 Hackathon Submission"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/smart-city-dashboard/src/app/page.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b4e3bdc1._.js.map