import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const title = searchParams.get('title')?.slice(0, 100) ?? 'BrandForge';
    const category = searchParams.get('category');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#0a0a0c',
            backgroundImage: 'radial-gradient(ellipse at top, rgba(79, 70, 229, 0.3), #0a0a0c)',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#4f46e5',
              marginRight: '20px'
            }} />
            <span style={{ fontSize: '32px', color: '#a5b4fc', fontWeight: 'bold' }}>
              BrandForge
            </span>
          </div>

          {category && (
            <div style={{
              display: 'flex',
              marginBottom: '20px',
              color: '#818cf8',
              fontSize: '24px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              {category}
            </div>
          )}

          <div
            style={{
              display: 'flex',
              fontSize: title.length > 40 ? '64px' : '80px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '30px',
              maxWidth: '900px'
            }}
          >
            {title}
          </div>

          <div style={{ display: 'flex', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', width: '100%', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '24px', color: '#9ca3af' }}>Founder Brand Operating System</span>
            <span style={{ fontSize: '24px', color: '#4f46e5' }}>brandforge.example.com</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
        },
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
