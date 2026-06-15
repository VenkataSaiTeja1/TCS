import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const topics = [
  {
    id: "arrays",
    name: "Arrays",
    icon: "▦",
    digitalWeight: 20,
    primeWeight: 16,
    tier: 1,
    color: "#4338CA",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    problems: [
      {
        id: 1,
        name: "Maximum Subarray Sum (Kadane's)",
        link: "https://leetcode.com/problems/maximum-subarray/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 2,
        name: "Remove Duplicates from Sorted Array",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 3,
        name: "Leaders in an Array",
        link: "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 4,
        name: "Find Missing Number",
        link: "https://leetcode.com/problems/missing-number/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 5,
        name: "Rotate Array by K Steps",
        link: "https://leetcode.com/problems/rotate-array/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 6,
        name: "Best Time to Buy & Sell Stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 7,
        name: "Trapping Rain Water",
        link: "https://leetcode.com/problems/trapping-rain-water/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 8,
        name: "Two Sum",
        link: "https://leetcode.com/problems/two-sum/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 9,
        name: "Merge Intervals",
        link: "https://leetcode.com/problems/merge-intervals/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Important",
      },
      {
        id: 10,
        name: "Subarray with Given Sum (Sliding Window)",
        link: "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 11,
        name: "Maximum Product Subarray",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 12,
        name: "Find Duplicate in Array",
        link: "https://leetcode.com/problems/find-the-duplicate-number/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
    ],
  },
  {
    id: "strings",
    name: "Strings",
    icon: "✎",
    digitalWeight: 15,
    primeWeight: 12,
    tier: 1,
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    problems: [
      {
        id: 13,
        name: "Reverse a String / Words in String",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 14,
        name: "Longest Common Prefix",
        link: "https://leetcode.com/problems/longest-common-prefix/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 15,
        name: "Valid Anagram",
        link: "https://leetcode.com/problems/valid-anagram/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 16,
        name: "Count Character Frequency",
        link: "https://www.geeksforgeeks.org/problems/frequency-of-characters-in-a-string/1",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 17,
        name: "Check if String is Palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 18,
        name: "Longest Palindromic Substring",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 19,
        name: "Group Anagrams",
        link: "https://leetcode.com/problems/group-anagrams/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Important",
      },
      {
        id: 20,
        name: "String Compression (Run-Length Encoding)",
        link: "https://leetcode.com/problems/string-compression/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 21,
        name: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 22,
        name: "Roman to Integer / Integer to Roman",
        link: "https://leetcode.com/problems/roman-to-integer/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
    ],
  },
  {
    id: "hashing",
    name: "Hashing",
    icon: "#",
    digitalWeight: 10,
    primeWeight: 9,
    tier: 1,
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    problems: [
      {
        id: 23,
        name: "Two Sum (HashMap approach)",
        link: "https://leetcode.com/problems/two-sum/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 24,
        name: "First Non-Repeating Character",
        link: "https://leetcode.com/problems/first-unique-character-in-a-string/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 25,
        name: "Duplicate Detection in Array",
        link: "https://leetcode.com/problems/contains-duplicate/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 26,
        name: "Subarray with Zero Sum",
        link: "https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 27,
        name: "Longest Consecutive Sequence",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 28,
        name: "Count Pairs with Given Sum",
        link: "https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Important",
      },
    ],
  },
  {
    id: "sorting",
    name: "Sorting & Binary Search",
    icon: "⇅",
    digitalWeight: 12,
    primeWeight: 10,
    tier: 1,
    color: "#0891B2",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    problems: [
      {
        id: 29,
        name: "Search in Sorted Array (Binary Search)",
        link: "https://leetcode.com/problems/binary-search/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 30,
        name: "First and Last Occurrence of Element",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 31,
        name: "Find Peak Element",
        link: "https://leetcode.com/problems/find-peak-element/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 32,
        name: "Search in Rotated Sorted Array",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 33,
        name: "Sqrt(x) using Binary Search",
        link: "https://leetcode.com/problems/sqrtx/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 34,
        name: "Kth Largest Element (Quick Select)",
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 35,
        name: "Merge Sort Implementation",
        link: "https://leetcode.com/problems/sort-an-array/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Important",
      },
      {
        id: 36,
        name: "Find Median of Two Sorted Arrays",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
    ],
  },
  {
    id: "math",
    name: "Math & Number Theory",
    icon: "π",
    digitalWeight: 10,
    primeWeight: 5,
    tier: 1,
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    problems: [
      {
        id: 37,
        name: "Count Prime Numbers (Sieve of Eratosthenes)",
        link: "https://leetcode.com/problems/count-primes/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 38,
        name: "GCD and LCM",
        link: "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 39,
        name: "Reverse an Integer",
        link: "https://leetcode.com/problems/reverse-integer/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 40,
        name: "Check Power of Two / Three",
        link: "https://leetcode.com/problems/power-of-two/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 41,
        name: "Fibonacci (Iterative + Memoized)",
        link: "https://leetcode.com/problems/fibonacci-number/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 42,
        name: "Factorial (Recursive + Iterative)",
        link: "https://www.geeksforgeeks.org/problems/factorial5739/1",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 43,
        name: "Excel Sheet Column Number",
        link: "https://leetcode.com/problems/excel-sheet-column-number/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "Added",
        tag: "Important",
      },
    ],
  },
  {
    id: "linkedlist",
    name: "Linked Lists",
    icon: "⬡",
    digitalWeight: 7,
    primeWeight: 4,
    tier: 2,
    color: "#DB2777",
    bg: "#FDF2F8",
    border: "#FBCFE8",
    problems: [
      {
        id: 44,
        name: "Reverse a Linked List",
        link: "https://leetcode.com/problems/reverse-linked-list/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 45,
        name: "Detect Cycle in Linked List (Floyd's)",
        link: "https://leetcode.com/problems/linked-list-cycle/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 46,
        name: "Merge Two Sorted Linked Lists",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 47,
        name: "Find Middle of Linked List",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 48,
        name: "Remove Nth Node from End",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Important",
      },
      {
        id: 49,
        name: "Add Two Numbers (as Linked List)",
        link: "https://leetcode.com/problems/add-two-numbers/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
    ],
  },
  {
    id: "stacks",
    name: "Stacks & Queues",
    icon: "☰",
    digitalWeight: 8,
    primeWeight: 6,
    tier: 2,
    color: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
    problems: [
      {
        id: 50,
        name: "Valid Parentheses",
        link: "https://leetcode.com/problems/valid-parentheses/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 51,
        name: "Next Greater Element",
        link: "https://leetcode.com/problems/next-greater-element-i/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 52,
        name: "Implement Queue using Two Stacks",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 53,
        name: "Min Stack (O(1) getMin)",
        link: "https://leetcode.com/problems/min-stack/",
        difficulty: "Medium",
        digitalProb: "High",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 54,
        name: "Largest Rectangle in Histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 55,
        name: "Sliding Window Maximum (Deque)",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 56,
        name: "Balanced Parentheses Generation",
        link: "https://leetcode.com/problems/generate-parentheses/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Important",
      },
    ],
  },
  {
    id: "recursion",
    name: "Recursion & Backtracking",
    icon: "↺",
    digitalWeight: 5,
    primeWeight: 6,
    tier: 2,
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    problems: [
      {
        id: 57,
        name: "Generate All Subsets / Power Set",
        link: "https://leetcode.com/problems/subsets/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 58,
        name: "Generate All Permutations",
        link: "https://leetcode.com/problems/permutations/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 59,
        name: "Generate Parentheses",
        link: "https://leetcode.com/problems/generate-parentheses/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Important",
      },
      {
        id: 60,
        name: "Word Search in Grid",
        link: "https://leetcode.com/problems/word-search/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 61,
        name: "Rat in a Maze / Maze Path Problems",
        link: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 62,
        name: "Letter Combinations of Phone Number",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
    ],
  },
  {
    id: "bits",
    name: "Bit Manipulation",
    icon: "⊕",
    digitalWeight: 6,
    primeWeight: 2,
    tier: 2,
    color: "#9333EA",
    bg: "#FAF5FF",
    border: "#E9D5FF",
    problems: [
      {
        id: 63,
        name: "Single Number (XOR trick)",
        link: "https://leetcode.com/problems/single-number/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Medium",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 64,
        name: "Count Number of Set Bits",
        link: "https://leetcode.com/problems/number-of-1-bits/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 65,
        name: "Check if Number is Power of 2",
        link: "https://leetcode.com/problems/power-of-two/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 66,
        name: "Reverse Bits of Integer",
        link: "https://leetcode.com/problems/reverse-bits/",
        difficulty: "Easy",
        digitalProb: "High",
        primeProb: "Low",
        source: "Added",
        tag: "Important",
      },
      {
        id: 67,
        name: "Find Two Non-Repeating Numbers (XOR)",
        link: "https://leetcode.com/problems/single-number-iii/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "Medium",
        source: "Added",
        tag: "Important",
      },
    ],
  },
  {
    id: "dp",
    name: "Dynamic Programming",
    icon: "◈",
    digitalWeight: 2,
    primeWeight: 15,
    tier: 3,
    color: "#CA8A04",
    bg: "#FEFCE8",
    border: "#FEF08A",
    problems: [
      {
        id: 68,
        name: "Climbing Stairs (1D DP)",
        link: "https://leetcode.com/problems/climbing-stairs/",
        difficulty: "Easy",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 69,
        name: "0/1 Knapsack Problem",
        link: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 70,
        name: "Longest Common Subsequence (LCS)",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 71,
        name: "Coin Change (Min Coins)",
        link: "https://leetcode.com/problems/coin-change/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 72,
        name: "House Robber",
        link: "https://leetcode.com/problems/house-robber/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Must Do",
      },
      {
        id: 73,
        name: "Longest Increasing Subsequence (LIS)",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 74,
        name: "Fibonacci with Memoization",
        link: "https://leetcode.com/problems/fibonacci-number/",
        difficulty: "Easy",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 75,
        name: "Edit Distance (Levenshtein)",
        link: "https://leetcode.com/problems/edit-distance/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 76,
        name: "Subset Sum Problem",
        link: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "PDF",
        tag: "Prime Focus",
      },
    ],
  },
  {
    id: "trees",
    name: "Trees",
    icon: "🌲",
    digitalWeight: 4,
    primeWeight: 8,
    tier: 3,
    color: "#16A34A",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    problems: [
      {
        id: 77,
        name: "Inorder / Preorder / Postorder Traversal",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        difficulty: "Easy",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 78,
        name: "Level Order Traversal (BFS)",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        difficulty: "Easy",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 79,
        name: "Height / Depth of Binary Tree",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        difficulty: "Easy",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 80,
        name: "Lowest Common Ancestor (LCA)",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 81,
        name: "Diameter of Binary Tree",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "Added",
        tag: "Important",
      },
      {
        id: 82,
        name: "Check if Binary Tree is Balanced",
        link: "https://leetcode.com/problems/balanced-binary-tree/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 83,
        name: "BST Insert / Search / Delete",
        link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
        difficulty: "Medium",
        digitalProb: "Medium",
        primeProb: "High",
        source: "PDF",
        tag: "Important",
      },
      {
        id: 84,
        name: "Serialize and Deserialize Binary Tree",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
    ],
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "◉",
    digitalWeight: 1,
    primeWeight: 7,
    tier: 4,
    color: "#475569",
    bg: "#F8FAFC",
    border: "#E2E8F0",
    problems: [
      {
        id: 85,
        name: "BFS Traversal",
        link: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
        difficulty: "Easy",
        digitalProb: "Low",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 86,
        name: "DFS Traversal",
        link: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
        difficulty: "Easy",
        digitalProb: "Low",
        primeProb: "High",
        source: "PDF",
        tag: "Must Do",
      },
      {
        id: 87,
        name: "Number of Islands",
        link: "https://leetcode.com/problems/number-of-islands/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 88,
        name: "Detect Cycle in Graph (Directed/Undirected)",
        link: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 89,
        name: "Topological Sort (Kahn's / DFS)",
        link: "https://leetcode.com/problems/course-schedule-ii/",
        difficulty: "Medium",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 90,
        name: "Shortest Path — BFS / Dijkstra",
        link: "https://leetcode.com/problems/network-delay-time/",
        difficulty: "Hard",
        digitalProb: "Low",
        primeProb: "High",
        source: "Added",
        tag: "Prime Focus",
      },
      {
        id: 91,
        name: "Count Connected Components",
        link: "https://www.geeksforgeeks.org/problems/connected-components-in-an-undirected-graph/1",
        difficulty: "Easy",
        digitalProb: "Low",
        primeProb: "High",
        source: "PDF",
        tag: "Important",
      },
    ],
  },
];

const diffColor = {
  Easy: { bg: "#F0FDF4", text: "#166534", border: "#BBF7D0" },
  Medium: { bg: "#FFF7ED", text: "#9A3412", border: "#FED7AA" },
  Hard: { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA" },
};
const probColor = {
  High: { bg: "#EEF2FF", text: "#3730A3" },
  Medium: { bg: "#F5F3FF", text: "#5B21B6" },
  Low: { bg: "#F8FAFC", text: "#64748B" },
};
const tagColor = {
  "Must Do": { bg: "#FEF2F2", text: "#DC2626" },
  "Prime Focus": { bg: "#FFF7ED", text: "#C2410C" },
  Important: { bg: "#EEF2FF", text: "#4338CA" },
};
const tierLabel = {
  1: "Must Master",
  2: "Very Important",
  3: "Moderate",
  4: "Low Priority",
};
const tierColor = { 1: "#DC2626", 2: "#D97706", 3: "#059669", 4: "#64748B" };

export default function TCSCodingSheet() {
  const [mode, setMode] = useState("digital");
  const [filter, setFilter] = useState("All");
  const [diffFilter, setDiffFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [checked, setChecked] = useState({});
  const [activeTab, setActiveTab] = useState("sheet");

  const totalProblems = topics.reduce((a, t) => a + t.problems.length, 0);
  const doneCount = Object.values(checked).filter(Boolean).length;

  const filteredTopics = topics
    .map((t) => ({
      ...t,
      problems: t.problems.filter((p) => {
        const tagOk =
          filter === "All" ||
          p.tag === filter ||
          (filter === "PDF Only" && p.source === "PDF") ||
          (filter === "Added" && p.source === "Added");
        const diffOk = diffFilter === "All" || p.difficulty === diffFilter;
        const probField = mode === "digital" ? p.digitalProb : p.primeProb;
        return tagOk && diffOk;
      }),
    }))
    .filter((t) => t.problems.length > 0);

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const topicDone = (topic) =>
    topic.problems.filter((p) => checked[p.id]).length;

  // summary stats
  const mustDo = topics
    .flatMap((t) => t.problems)
    .filter((p) => p.tag === "Must Do").length;
  const primeFocus = topics
    .flatMap((t) => t.problems)
    .filter((p) => p.tag === "Prime Focus").length;
  const fromPDF = topics
    .flatMap((t) => t.problems)
    .filter((p) => p.source === "PDF").length;

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        background: "#0F172A",
        minHeight: "100vh",
        paddingBottom: 48,
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #312E81 100%)",
          padding: "28px 20px 0",
          textAlign: "center",
          borderBottom: "1px solid #1E293B",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: "#818CF8",
            marginBottom: 6,
            textTransform: "uppercase",
          }}
        >
          Curated Problem Sheet
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 900,
            color: "white",
            letterSpacing: -0.5,
          }}
        >
          TCS Coding Sheet
        </h1>
        <p style={{ margin: "6px 0 16px", fontSize: 13, color: "#94A3B8" }}>
          {totalProblems} problems · Curated from PDF + Expert additions
        </p>

        {/* Stats Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {[
            ["✅", doneCount, "Completed", "#22C55E"],
            ["🎯", mustDo, "Must Do", "#EF4444"],
            ["🔥", primeFocus, "Prime Focus", "#F97316"],
            ["📄", fromPDF, "From PDF", "#818CF8"],
          ].map(([icon, count, label, color]) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "8px 14px",
                textAlign: "center",
                minWidth: 70,
              }}
            >
              <div style={{ fontSize: 16 }}>{icon}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color }}>
                {count}
              </div>
              <div style={{ fontSize: 10, color: "#64748B" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div
          style={{
            maxWidth: 400,
            margin: "0 auto 18px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 20,
            height: 6,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${(doneCount / totalProblems) * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
              borderRadius: 20,
              transition: "width 0.3s",
            }}
          />
        </div>
        <div style={{ fontSize: 12, color: "#64748B", marginBottom: 16 }}>
          {doneCount}/{totalProblems} solved (
          {Math.round((doneCount / totalProblems) * 100)}%)
        </div>

        {/* Mode Toggle */}
        <div
          style={{
            display: "inline-flex",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 30,
            padding: 4,
            gap: 4,
            marginBottom: 16,
          }}
        >
          {["digital", "prime"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: "7px 20px",
                borderRadius: 24,
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 13,
                transition: "all 0.2s",
                background: mode === m ? "white" : "transparent",
                color: mode === m ? "#1E1B4B" : "rgba(255,255,255,0.6)",
              }}
            >
              TCS {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[
            ["sheet", "📋 Problem Sheet"],
            ["summary", "📊 Topic Summary"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                flex: 1,
                padding: "12px 8px",
                border: "none",
                background: "none",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                color: activeTab === key ? "#818CF8" : "#64748B",
                borderBottom:
                  activeTab === key
                    ? "2px solid #818CF8"
                    : "2px solid transparent",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 14px" }}>
        {/* PROBLEM SHEET TAB */}
        {activeTab === "sheet" && (
          <>
            {/* Filters */}
            <div
              style={{
                padding: "14px 0 10px",
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {[
                  "All",
                  "Must Do",
                  "Prime Focus",
                  "Important",
                  "PDF Only",
                  "Added",
                ].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 20,
                      border: `1px solid ${filter === f ? "#818CF8" : "#1E293B"}`,
                      background: filter === f ? "#1E293B" : "transparent",
                      color: filter === f ? "#818CF8" : "#64748B",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {["All", "Easy", "Medium", "Hard"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiffFilter(d)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 20,
                      border: `1px solid ${diffFilter === d ? "#818CF8" : "#1E293B"}`,
                      background: diffFilter === d ? "#1E293B" : "transparent",
                      color: diffFilter === d ? "#818CF8" : "#64748B",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Sections */}
            {filteredTopics.map((topic) => {
              const isOpen = expandedTopic === topic.id;
              const done = topicDone(topic);
              const total = topic.problems.length;
              const pct = total > 0 ? (done / total) * 100 : 0;
              const weight =
                mode === "digital" ? topic.digitalWeight : topic.primeWeight;

              return (
                <div
                  key={topic.id}
                  style={{
                    background: "#1E293B",
                    borderRadius: 14,
                    border: `1px solid #334155`,
                    marginBottom: 10,
                    overflow: "hidden",
                  }}
                >
                  {/* Topic Header */}
                  <button
                    onClick={() => setExpandedTopic(isOpen ? null : topic.id)}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: topic.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        color: topic.color,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {topic.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: "#F1F5F9",
                          }}
                        >
                          {topic.name}
                        </span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: tierColor[topic.tier],
                            background: `${tierColor[topic.tier]}20`,
                            padding: "2px 8px",
                            borderRadius: 10,
                          }}
                        >
                          Tier {topic.tier}
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 800,
                            color: topic.color,
                          }}
                        >
                          {weight}% weight
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: 6,
                          height: 3,
                          background: "#334155",
                          borderRadius: 4,
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${pct}%`,
                            height: "100%",
                            background: topic.color,
                            borderRadius: 4,
                            transition: "width 0.3s",
                          }}
                        />
                      </div>
                      <div
                        style={{ fontSize: 11, color: "#64748B", marginTop: 3 }}
                      >
                        {done}/{total} solved
                      </div>
                    </div>
                    <span style={{ color: "#475569", fontSize: 18 }}>
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {/* Problems List */}
                  {isOpen && (
                    <div style={{ borderTop: "1px solid #334155" }}>
                      {/* Column Headers */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "28px 1fr 70px 60px 60px 70px",
                          gap: 8,
                          padding: "8px 16px",
                          background: "#0F172A",
                        }}
                      >
                        {["", "Problem", "Diff", "Digital", "Prime", "Tag"].map(
                          (h) => (
                            <div
                              key={h}
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: "#475569",
                                textTransform: "uppercase",
                                letterSpacing: 0.5,
                              }}
                            >
                              {h}
                            </div>
                          ),
                        )}
                      </div>

                      {topic.problems.map((p, i) => {
                        const dc = diffColor[p.difficulty];
                        const tc = tagColor[p.tag];
                        const isDone = checked[p.id];
                        return (
                          <div
                            key={p.id}
                            onClick={() => toggle(p.id)}
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "28px 1fr 70px 60px 60px 70px",
                              gap: 8,
                              padding: "10px 16px",
                              borderTop: "1px solid #1E293B",
                              alignItems: "center",
                              cursor: "pointer",
                              background: isDone
                                ? "rgba(34,197,94,0.06)"
                                : i % 2 === 0
                                  ? "#1E293B"
                                  : "#172033",
                              transition: "background 0.15s",
                            }}
                          >
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 6,
                                border: `2px solid ${isDone ? "#22C55E" : "#334155"}`,
                                background: isDone ? "#22C55E" : "transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                transition: "all 0.2s",
                              }}
                            >
                              {isDone && (
                                <span
                                  style={{
                                    color: "white",
                                    fontSize: 12,
                                    fontWeight: 900,
                                  }}
                                >
                                  ✓
                                </span>
                              )}
                            </div>
                            <div>
                              <a
                                href={
                                  p.link ||
                                  `https://www.google.com/search?q=${encodeURIComponent(
                                    p.name + " LeetCode",
                                  )}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  fontSize: 13,
                                  color: isDone ? "#64748B" : "#60A5FA",
                                  fontWeight: 500,
                                  textDecoration: isDone
                                    ? "line-through"
                                    : "none",
                                }}
                              >
                                {p.name}
                              </a>
                              {p.source === "PDF" && (
                                <span
                                  style={{
                                    marginLeft: 6,
                                    fontSize: 9,
                                    color: "#818CF8",
                                    border: "1px solid #3730A3",
                                    borderRadius: 4,
                                    padding: "1px 4px",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  PDF
                                </span>
                              )}
                            </div>
                            <div>
                              <span
                                style={{
                                  fontSize: 11,
                                  fontWeight: 700,
                                  color: dc.text,
                                  background: dc.bg,
                                  padding: "2px 7px",
                                  borderRadius: 8,
                                }}
                              >
                                {p.difficulty}
                              </span>
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color:
                                  p.digitalProb === "High"
                                    ? "#22C55E"
                                    : p.digitalProb === "Medium"
                                      ? "#F59E0B"
                                      : "#475569",
                                fontWeight: 600,
                              }}
                            >
                              {p.digitalProb}
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color:
                                  p.primeProb === "High"
                                    ? "#22C55E"
                                    : p.primeProb === "Medium"
                                      ? "#F59E0B"
                                      : "#475569",
                                fontWeight: 600,
                              }}
                            >
                              {p.primeProb}
                            </div>
                            <div>
                              <span
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: tc.text,
                                  background: tc.bg,
                                  padding: "2px 6px",
                                  borderRadius: 8,
                                }}
                              >
                                {p.tag}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* SUMMARY TAB */}
        {activeTab === "summary" && (
          <div style={{ marginTop: 16 }}>
            {/* Weightage Table */}
            <div
              style={{
                background: "#1E293B",
                borderRadius: 14,
                border: "1px solid #334155",
                overflow: "hidden",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  padding: "14px 18px",
                  borderBottom: "1px solid #334155",
                }}
              >
                <div
                  style={{ fontSize: 15, fontWeight: 700, color: "#F1F5F9" }}
                >
                  📊 Topic Weightage — TCS{" "}
                  {mode === "digital" ? "Digital" : "Prime"}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.6fr 0.6fr 0.7fr 0.8fr 0.6fr",
                  gap: 8,
                  padding: "10px 18px",
                  background: "#0F172A",
                }}
              >
                {["Topic", "Weight", "Tier", "Problems", "Done"].map((h) => (
                  <div
                    key={h}
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#475569",
                      textTransform: "uppercase",
                      letterSpacing: 0.4,
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {[...topics]
                .sort((a, b) =>
                  mode === "digital"
                    ? b.digitalWeight - a.digitalWeight
                    : b.primeWeight - a.primeWeight,
                )
                .map((t, i) => {
                  const w =
                    mode === "digital" ? t.digitalWeight : t.primeWeight;
                  const done = topicDone(t);
                  return (
                    <div
                      key={t.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.6fr 0.6fr 0.7fr 0.8fr 0.6fr",
                        gap: 8,
                        padding: "11px 18px",
                        borderTop: "1px solid #1E293B",
                        alignItems: "center",
                        background: i % 2 === 0 ? "#1E293B" : "#172033",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: t.color,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#E2E8F0",
                          }}
                        >
                          {t.name}
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 800,
                            color: t.color,
                          }}
                        >
                          {w}%
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: tierColor[t.tier],
                            background: `${tierColor[t.tier]}20`,
                            padding: "2px 8px",
                            borderRadius: 8,
                          }}
                        >
                          T{t.tier} · {tierLabel[t.tier]}
                        </span>
                      </div>
                      <div>
                        <div
                          style={{
                            height: 4,
                            background: "#334155",
                            borderRadius: 4,
                            marginBottom: 4,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${(done / t.problems.length) * 100}%`,
                              height: "100%",
                              background: t.color,
                              borderRadius: 4,
                            }}
                          />
                        </div>
                        <div style={{ fontSize: 11, color: "#64748B" }}>
                          {done}/{t.problems.length}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color:
                            done === t.problems.length ? "#22C55E" : "#64748B",
                        }}
                      >
                        {done === t.problems.length
                          ? "✓ Done"
                          : `${Math.round((done / t.problems.length) * 100)}%`}
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Key Focus Box */}
            <div
              style={{
                background: "linear-gradient(135deg, #1E1B4B, #312E81)",
                borderRadius: 14,
                padding: "20px 18px",
                border: "1px solid #4338CA",
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 12,
                }}
              >
                {mode === "digital"
                  ? "⚡ Digital Strategy"
                  : "🔥 Prime Strategy"}
              </div>
              {mode === "digital" ? (
                <div>
                  {[
                    [
                      "Top 4 topics cover 57%",
                      "Arrays (20%) + Strings (15%) + Sorting (12%) + Hashing (10%) — nail these first.",
                    ],
                    [
                      "Coding round: 2 problems",
                      "Usually 1 Easy + 1 Medium. Speed matters. Aim to finish both in 45 min.",
                    ],
                    [
                      "Bit Manipulation is underrated",
                      "6% weight and very easy marks — 5 problems, all solvable in under 20 min each.",
                    ],
                    [
                      "Skip Hard DP & Graphs",
                      "Only 3% combined for Digital. Don't waste time here unless Tier 1 is fully done.",
                    ],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      style={{ display: "flex", gap: 10, marginBottom: 12 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#818CF8",
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#C7D2FE",
                          }}
                        >
                          {title}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#94A3B8",
                            marginTop: 2,
                            lineHeight: 1.5,
                          }}
                        >
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {[
                    [
                      "DP is now Tier 1 at 15%",
                      "9 DP problems here — must do Knapsack, LCS, Coin Change, LIS. These appear every year.",
                    ],
                    [
                      "Trees + Graphs = 15% combined",
                      "8 tree + 7 graph problems. BFS, DFS, cycle detection, topo sort are non-negotiable.",
                    ],
                    [
                      "Coding round: 3 problems",
                      "1 Easy + 1 Medium + 1 Medium-Hard. If you can't do the hard one, do the easy two perfectly.",
                    ],
                    [
                      "Backtracking is tested",
                      "Subset generation, permutations, maze problems — practice until you can code these in 15 min.",
                    ],
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      style={{ display: "flex", gap: 10, marginBottom: 12 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#818CF8",
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#C7D2FE",
                          }}
                        >
                          {title}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#94A3B8",
                            marginTop: 2,
                            lineHeight: 1.5,
                          }}
                        >
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
