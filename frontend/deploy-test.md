# Deployment Test Guide

## Test Pages Created

1. **Main Page** (`/`) - Simplified version with navigation
2. **Simple Test** (`/simple`) - Basic functionality test
3. **Test Page** (`/test`) - Minimal routing test
4. **404 Page** (`/not-found`) - Custom error handling

## Environment Variables Required

```
NEXT_PUBLIC_API_URL=https://cogni-ml.onrender.com
```

## Testing Steps

1. **Check Main Page**: Visit `/` - should show simplified homepage
2. **Test Navigation**: Click links to `/simple` and `/test`
3. **Test API Connection**: Use the "Test Backend Connection" button
4. **Test 404**: Visit a non-existent page like `/nonexistent`

## Expected Results

- ✅ Main page loads without errors
- ✅ Navigation works between pages
- ✅ API connection test shows backend status
- ✅ 404 page shows custom error message

## Troubleshooting

If you still get 404 errors:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Check if build completed successfully
4. Try accessing `/simple` directly
